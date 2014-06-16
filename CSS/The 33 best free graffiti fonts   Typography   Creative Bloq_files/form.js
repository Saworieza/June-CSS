Form = function () {

	var clearCheckboxChecked = function ($elems) {
			$elems.removeClass('active');
		},

		toggleCheckbox = function ($elem) {
			if ( $elem.children('input[type="checkbox"]').is(':checked') ) {
				$elem.addClass('active');
			} else {
				$elem.removeClass('active');
			}
		};

	this.updateCheckboxGroup = function ($elem) {

		if (!$elem || !$elem.length) {
			return;
		}

		// clearCheckboxChecked($elem.siblings());
		toggleCheckbox($elem);
	};
};