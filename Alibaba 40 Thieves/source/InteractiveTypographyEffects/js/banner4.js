function Banner(){
	
	var keyword 	= "Image",
		canvas, context,
		bgCanvas, bgContext,
		density 	= 6,
		particles 	= [],
		colours 	= ['#a2dade', '#6ccacd', '#00b3b0', '#009279', '#006957'],
		img,
		mouse 		= { x:0, y:0 },
		isDrawing	= false,
		canvasW, canvasH,
		defaultFont	= 'Arial';
	
	this.initialize 	= function( canvas_id, font ) {
		
		if( font )
			defaultFont = font;
		
		reload( canvas_id );
		
		window.onresize = function(event) {
			reload( canvas_id );
		}
		
	};
	
	var reload			= function(canvas_id) {
		
		canvas 			= document.getElementById( canvas_id );
			
		context 		= canvas.getContext('2d');
		
		canvasW			= window.innerWidth;
		canvasH			= 300;
		
		canvas.width 	= canvasW;
		canvas.height 	= canvasH;
		
		bgCanvas 		= document.createElement('canvas');
		bgContext 		= bgCanvas.getContext('2d');
		
		bgCanvas.width 	= canvasW;
		bgCanvas.height = canvasH;
		
		canvas.addEventListener( 'mousemove', MouseMove, false );
		canvas.addEventListener( 'mouseout', MouseOut, false );
		
		img 			= new Image();
  		img.src 		= 'images/crown-image.png';
  		img.onload = function(){
	    
			prepare();
			setupParticles();
			draw();
  		}
		
	};
	
	var prepare 		= function() {
							
		//Chose the font, and size that we want.
		bgContext.font 	= '190px Sancreek';
		
		//Fill the keyword text onto the canvas.
		var textW		= bgContext.measureText(keyword).width,
			left		= ( canvasW / 2 ) - ( Math.round( ( textW + img.width ) / 2 ) );
		
		bgContext.fillText(keyword, left , 210 );
		
		bgContext.drawImage(img, left + textW , 85 );
		
	};
	
	var setupParticles 	= function() {
		
		particles = [];
		
		//Declare our local variables
		var imageData, image_Data, 
			pixel;
			
		//Get the image data - from (0,0) to the edges of the canvas
		imageData = bgContext.getImageData( 0, 0, canvasW, canvasH );
		image_Data= imageData.data;
			
		//Iterate horizontally over the image data
		for( var width = 0; width < canvasW; width += density ) {
			
			//Iterate vertically over image data 
			for( var height = 0; height < canvasH; height += density ) {
			   
				//Get the pixel located at our current iteration
				pixel = image_Data[ ( ( width + ( height * canvasW ) ) * 4 ) - 1 ];
				  
				//Pixel has been drawn on.
				if( pixel == 255 ) {

					//Add the coodinates and colour to our particle array.
					particles.push({
						colour	: colours[ Math.floor( Math.random() * colours.length ) ],
						x		: width,
						y		: height
					});
				}
				
			}
		}
			
	};
	
	var draw 			= function() {
							
		context.clearRect( 0, 0, canvas.width, canvas.height );
        
		var dx, dy, sqrDist, 
			scale = 1;
 		
 		for( var i = 0, len = particles.length; i < len; ++i ) {
 			
			var p	= particles[i];
			
			dx 		= p.x - mouse.x;
			dy 		= p.y - mouse.y;
			
			// distance from mouse to particle
			sqrDist =  Math.sqrt( dx * dx + dy * dy );
			
			( isDrawing ) ? scale = Math.max( Math.min( 10 - ( sqrDist / 10 ), 5 ), 1 ) : scale = 1;
			
 			context.fillStyle = p.colour;

			context.beginPath();
			context.arc( p.x, p.y, 1.6 * scale, 0, Math.PI * 2, true );
			context.closePath();
	    	context.fill();
			
		}
		
	};
	
	var MouseMove 		= function( e ) {
    	
		mouse.x = e.offsetX || ( e.layerX - canvas.offsetLeft );
   		mouse.y = e.offsetY || ( e.layerY - canvas.offsetTop );
		
		if( !isDrawing ) {
			
			isDrawing = true;
			drawTimeout = setTimeout( function() {
				draw();
				isDrawing = false;
			}, 70);
			
		}
		
	};
	
	var MouseOut 		= function(e) {
		
		isDrawing = false;	
		clearTimeout( drawTimeout );
		draw();
		
	};
	
}
