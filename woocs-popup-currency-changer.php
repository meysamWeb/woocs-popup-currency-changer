<?php
/*
Plugin Name: WOOCS Popup Currency Changer
Plugin URI: https://www.yourwebsite.com
Description: A plugin that implements a pop-up currency changer based on WOOCS plugin.
Version: 1.0
Author: meysamWeb
Author URI: https://github.com/meysamWeb
License: GPLv2 or later
Text Domain: woocs-popup-currency-changer
*/

defined( 'ABSPATH' ) or die( 'No Accesses' );


function woocs_popup_currency_changer_scripts() {
    wp_enqueue_script( 'jquery' ); // Load jQuery from WordPress core
    wp_enqueue_script( 'woocs-popup-currency-changer-js', plugins_url( '/assets/js/script.js', __FILE__ ), array( 'jquery' ), '1.0', true );

    // Register and enqueue Bootstrap JavaScript file
    wp_register_script( 'bootstrap-js', plugins_url( '/assets/js/bootstrap.min.js', __FILE__ ), array( 'jquery' ), '4.0.0', true );
    wp_enqueue_script( 'bootstrap-js' );

    // Register and enqueue Popper JavaScript file
    wp_register_script( 'popper-js', plugins_url( '/assets/js/popper.min.js', __FILE__ ), array( 'jquery' ), '1.12.9', true );
    wp_enqueue_script( 'popper-js' );
}
add_action( 'wp_enqueue_scripts', 'woocs_popup_currency_changer_scripts' );


function woocs_popup_currency_changer_styles() {
    wp_enqueue_style( 'bootstrap', plugins_url( '/assets/css/bootstrap.min.css', __FILE__ ), array(), '1.0', 'all' );
    wp_enqueue_style( 'woocs-popup-currency-changer-css', plugins_url( '/assets/css/style.min.css', __FILE__ ), array('bootstrap'), '1.0', 'all' );
}
add_action( 'wp_enqueue_scripts', 'woocs_popup_currency_changer_styles' );



function woocs_popup_currency_changer_function() {
    $output = '<button id="my-button" class="btn btn-link">
    <span>Ship to</span>
    <img src="'.plugins_url( "/assets/img/flag-US.png", __FILE__ ) .'" alt="logo_currency_changer" width="30" height="17" class="shipToFlag flag-icon va-m US" style="opacity: 1;">
    <span>USD</span>
</button>

<div class="modal fade" id="my-modal" tabindex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
            <img src="'.plugins_url( "assets/img/globe-iconwidth-50.png", __FILE__ ) .'" width="28" height="28" alt="icon globe" class="novicaicon marg-r2 m-hidden" loading="lazy">
            <h5 class="modal-title" id="modal-label">
                We Ship to Over 100 Destinations</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
     <p> We now ship to over 100 countries, providing a truly global marketplace for both artisans and customers. Customize your experience with the options below.</p>


       <div class="form-group">
        <h5 class="font-weight-bold">Step 1: Choose your shipping destination</h5>
        <label for="country">Country:</label>
        <select id="country-select" class="form-control">
            <option value="" selected disabled>Select Country</option>
          </select>
      </div>

      <div class="form-group">
        <h5 class="font-weight-bold">Step 2: Choose your currency</h5>
        <label for="currency">Currency:</label>
        <select class="form-control" id="currency">
            <option value="" selected disabled>Select currency</option>
            <option value="USD">US Dollar (USD)</option>
            <option value="GBP">United Kingdom (GBP)</option>
            <option value="CAD">Canadian Dollar (CAD)</option>
            <option value="AUD">Australia Dollar (AUD)</option>
            <option value="EUR">Euro (EUR)</option>
          </select>
      </div>

    </div>

    <div class="modal-footer align-self-center">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Shop with these settings</button>
      </div>
  </div>

    
</div>
</div>

';
    return $output;
}
add_shortcode( 'woocs_popup_currency_changer', 'woocs_popup_currency_changer_function' );

