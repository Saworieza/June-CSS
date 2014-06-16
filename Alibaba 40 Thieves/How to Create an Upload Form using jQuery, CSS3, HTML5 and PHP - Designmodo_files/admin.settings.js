jQuery(function(){
	rewards_type_change();
	/* calculation_type_change(); */
	recalculate_points_percentage();
	jQuery("#woocommerce_rewards_settings_swr_rewards_type").change(rewards_type_change);
	jQuery("#woocommerce_rewards_settings_swr_rewards_calculation").change(calculation_type_change);
	jQuery("#woocommerce_rewards_settings_swr_rewards_used_type").change(calculation_used_type_change);
	jQuery("#woocommerce_rewards_settings_swr_rewards_percentage, #woocommerce_rewards_settings_swr_rewards_title").keyup(recalculate_points_percentage);
	
	jQuery("#_exact_reward").keyup(function(){
		
		if( jQuery(this).val() == '' ){
			
			jQuery("#_reward").prop("disabled", false);
			
		}else{
			
			jQuery("#_reward").prop("disabled", true);
			
		}
		
	}).trigger("keyup");
	
});

function rewards_type_change(){
	jQuery("#table_points_value").hide();
	if(jQuery("#woocommerce_rewards_settings_swr_rewards_type").val() == 'money'){
		jQuery("#woocommerce_rewards_settings_swr_rewards_calculation, #woocommerce_rewards_settings_swr_rewards_points, #woocommerce_rewards_settings_swr_rewards_fraction, #woocommerce_rewards_settings_swr_rewards_points_value, #woocommerce_rewards_settings_swr_rewards_fraction_type, #woocommerce_rewards_settings_swr_rewards_min_points").parents("tr").hide();
		jQuery("#woocommerce_rewards_settings_swr_rewards_percentage").parents("tr").show();
	}else{
		jQuery("#woocommerce_rewards_settings_swr_rewards_calculation, #woocommerce_rewards_settings_swr_rewards_fraction, #woocommerce_rewards_settings_swr_rewards_fraction_type, #woocommerce_rewards_settings_swr_rewards_min_points").parents("tr").show();
		calculation_type_change();
	}
}

function calculation_type_change(){
	if(jQuery("#woocommerce_rewards_settings_swr_rewards_calculation").val() == 'percentage'){
		jQuery("#woocommerce_rewards_settings_swr_rewards_percentage").parents("tr").show();
		jQuery("#woocommerce_rewards_settings_swr_rewards_fraction, #woocommerce_rewards_settings_swr_rewards_fraction_type").parents("tr").hide();
	}else{
		jQuery("#woocommerce_rewards_settings_swr_rewards_fraction, #woocommerce_rewards_settings_swr_rewards_fraction_type").parents("tr").show();
		jQuery("#woocommerce_rewards_settings_swr_rewards_percentage").parents("tr").hide();
	}
	calculation_used_type_change();
}

function calculation_used_type_change(){
	if(jQuery("#woocommerce_rewards_settings_swr_rewards_used_type").val() == 'pointsvalue'){
		jQuery("#table_points_value").hide();
		jQuery("#woocommerce_rewards_settings_swr_rewards_min_points, #woocommerce_rewards_settings_swr_apply_rewards_auto").parents("tr").show();
		if(jQuery("#woocommerce_rewards_settings_swr_rewards_calculation").val() == 'percentage'){
			jQuery("#woocommerce_rewards_settings_swr_rewards_points").parents("tr").show();
			jQuery("#woocommerce_rewards_settings_swr_rewards_points_value").parents("tr").hide();
		}else{
			jQuery("#woocommerce_rewards_settings_swr_rewards_points").parents("tr").hide();
			jQuery("#woocommerce_rewards_settings_swr_rewards_points_value").parents("tr").show();
		}
	}else{
		jQuery("#woocommerce_rewards_settings_swr_rewards_points, #woocommerce_rewards_settings_swr_rewards_points_value, #woocommerce_rewards_settings_swr_rewards_min_points, #woocommerce_rewards_settings_swr_apply_rewards_auto").parents("tr").hide();
		jQuery("#table_points_value").show();
	}
}

function recalculate_points_percentage(){
	var lab = jQuery("#woocommerce_rewards_settings_swr_rewards_title").val();
	var va = jQuery("#woocommerce_rewards_settings_swr_rewards_percentage").val();
	
	if( va != undefined ){
		va = va.replace('%', '');
		va = va.replace(',', '');
	}
	
	if(va > 0){
		jQuery("#swr_percentage_value_enter").html(round(va/100*10, 2)+' '+lab);
	}
}

function round(n,dec) {
	n = parseFloat(n);
	if(!isNaN(n)){
		if(!dec) var dec= 0;
		var factor= Math.pow(10,dec);
		return Math.floor(n*factor+((n*factor*10)%10>=5?1:0))/factor;
	}else{
		return n;
	}
}