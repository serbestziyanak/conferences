(function($) {	
	'use strict';
    
    var year = 2024;
    var month = 6;
    var date = 27;
    var time = 8;
    
    month = month - 1;
    jQuery(function () {
        jQuery('#defaultCountdown').countdown({until: new Date(year, month, date, time)});
    });
})(jQuery);

