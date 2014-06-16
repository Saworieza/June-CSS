(function( window, undefined ) {
	
var hifi = function( selector ){
		return new hifi.prototype.init( selector );
	}

hifi.prototype = {

		// Holds the built up Selector Query
		q: {},
		apiEndPoint: '/hifi/api',
		about: 'HiFi API Version 1.0',
		
		init: function( selector ){
			this.q = $.extend(true, {}, selector);
			return this;
		},
		
		setup: function( properties ){
			$.extend(true, hifi.prototype, properties);
			return this;
		},
		
		// Special, returns the query Object
		query: function(){
			return this.q;
		},
		
		/******************************************************
		*  These functions manipulate the query object
		*   - They do not hit the server
		******************************************************/
		
		// Extend the query object with another object
		find: function (jsonquery){
			this.q = $.extend(true, this.q, jsonquery);
			return this;
		},
		children: function(jsonquery){
			this.q = $.extend({parent: this.q}, jsonquery);
			return this;
		},
		
		// These manipulate individual properties
		orderBy: function(value){
			if(value === undefined) {return this.q.orderBy;}
			this.q.orderBy = value;
			return this;
		},
		count: function(value){
			if(value === undefined) {return this.q.count;}
			this.q.count = value;
			return this;
		},
		versions: function(value){
			this.q.fresh = [0,1];
			this.q.orderBy = '-node';
			return this;
		},
		
		/******************************************************
		*  These functions go to the server to get results
		******************************************************/
		request: function(callback, method, data){
			if(data === undefined) data = this.q;
			if(method === undefined) method = 'GET';
				
			data = JSON.stringify(data);
			var sentData = {};
			var hf = this;
			if(method == 'GET') sentData.q = data;
			else sentData.data = data; 
			$.ajax({
				url: this.apiEndPoint,
				//username: this.apiUsername,
				//password: this.apiPassword,
				type: method,
				data: sentData,
				dataType: 'json',
				cache: false,
				success: function(data, status) {
					hf.s = true;
					if($.isFunction(callback)){
						callback(data.results, data.success);
					}
				}
			});
			return this;	
		},
		// Retrieve
		each: function(eachfn, callback){
			return this.request(function(results, status){
				for(var i = 0; i < results.length; i++) {
					var item = results[i];
					if($.isFunction(eachfn)){
						eachfn(item);
					}
				}
				if($.isFunction(callback)){
					callback();
				}
			});	
		},
		get: function(callback){
			this.request(callback);
		},
		/********** These are compound -- they get results and then execute one at a time *************/
		remove: function(callback){
			this.update({fresh: 0}, callback);
		},
		append: function(nodeJSON, callback){
			var thisref = this;
			return this.each(function(node){
				nodeJSON.parent = node.id;
				thisref.create(nodeJSON, callback);
			});	
		},
		promote: function(callback){
			var thisref = this;
			return this.each(function(node){
				thisref.q = {id: node.id, node: node.node, fresh: 1};
				thisref.update();
			});
		},
		
		
		/********** These require ids because they operate one at a time *************/
		//Create
		create: function(nodeJSON, callback){
			if(!$.isArray(nodeJSON)) {
				nodeJSON = [nodeJSON];
			}
			for(var i = 0; i < nodeJSON.length; i++) {
				var item = nodeJSON[i];
				if(item.parent === undefined) {
					throw 'A parent is required for a create.';
				}
				if(item.type === undefined) {
					throw 'A type is required for a create.';
				}
			}
			return this.request(callback, 'POST', nodeJSON);
		},
		//Update
		update: function(nodeJSON, callback){
			if($.isArray(nodeJSON)) {
				this.request(callback, 'POST', nodeJSON);
			} else {
				var thisref = this;
				return this.request(function(results){
					results = $.map(results, function (item){
						var idObj = {id: item.id};
						return $.extend(idObj, nodeJSON);
					})
					thisref.request(callback, 'POST', results);
				});
			}
		},

		//Destroy
		destroy: function(callback){
			this.q.fresh = 0;
			
			if(this.q.id === undefined){
				console.log('An id is required for a destroy');
				return this;
			}
			this.request(callback, 'POST');		
		}
	};
	hifi.prototype.init.prototype = hifi.prototype;
	
	window.hifi = hifi;
})(window);