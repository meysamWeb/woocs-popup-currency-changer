jQuery(document).ready(function() {
    // show modal
    jQuery('#my-button').on('click', function(){
      jQuery('#my-modal').modal('show');
    });
      // Array of 5 countries to show at the top
      const topCountries = ["United States", "Canada", "Spain", "Germany", "United Kingdom"];
    
      // Array of all countries
      const allCountries = [
          "-----------",
          "American Samoa", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria (Österreich)", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belgium", "Belize", "Bermuda", "Bonaire, Saba and Saint Eustatius", "British Virgin Islands", "Bulgaria", "Cambodia", "Canary Islands", "Cayman Islands", "Chile", "China", "Christmas Island", "Cocos (Keeling) Island", "Colombia", "Cook Islands", "Costa Rica", "Croatia", "Curaçao", "Cyprus", "Czechia", "Denmark", "Dominica", "Dominican Republic", "Egypt", "El Salvador", "Estonia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "Germany", "Gibraltar", "Greece", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey (Channel Islands)", "Haiti", "Hong Kong", "Hungary", "Iceland", "India", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jersey (Channel Islands)", "Latvia", "Lebanon", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Malaysia", "Malta", "Marshall Islands", "Martinique", "Mauritius", "Mexico", "Midway Islands", "Monaco", "Netherlands", "New Zealand", "Nicaragua", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Papua New Guinea", "Paraguay", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Saint Lucia", "Saint Maarten", "Saint-Martin", "Saint Vincent and the Grenadines", "San Marino", "Seychelles", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "South Africa", "South Korea", "Spain (Ceuta Only)", "St. Kitts and Nevis", "Sweden", "Switzerland", "Taiwan", "Thailand", "Trinidad and Tobago", "Turkiye", "United Arab Emirates", "Uruguay", "Vanuatu", "Venezuela", "Virgin Islands (USVI)", "Wake Island"
      ];
    
      // Loop through topCountries and append options to select element
      jQuery.each(topCountries, function(index, value) {
        jQuery('#country-select').append('<option value="' + value + '">' + value + '</option>');
      });
    
      // Loop through allCountries and append options to select element
      jQuery.each(allCountries, function(index, value) {
        // Only append options that are not in topCountries
        if (jQuery.inArray(value, topCountries) === -1) {
          jQuery('#country-select').append('<option value="' + value + '">' + value + '</option>');
        }
      });
  
  
    // Currency codes for each country
  const currencies = {
      "United States": "USD",
      "Canada": "CAD",
      "Spain": "EUR",
      "Germany": "EUR",
      "United Kingdom": "GBP",
      "Australia": "AUD"
    };
    
    // Loop through all countries and add currency codes for European countries
    jQuery.each(allCountries, function(index, value) {
      if (value.indexOf("Spain") !== -1 || value.indexOf("Germany") !== -1 || value.indexOf("United Kingdom") !== -1 || value.indexOf("Austria") !== -1 || value.indexOf("Belgium") !== -1 || value.indexOf("Bulgaria") !== -1 || value.indexOf("Croatia") !== -1 || value.indexOf("Cyprus") !== -1 || value.indexOf("Czechia") !== -1 || value.indexOf("Denmark") !== -1 || value.indexOf("Estonia") !== -1 || value.indexOf("Finland") !== -1 || value.indexOf("France") !== -1 || value.indexOf("Greece") !== -1 || value.indexOf("Hungary") !== -1 || value.indexOf("Ireland") !== -1 || value.indexOf("Italy") !== -1 || value.indexOf("Latvia") !== -1 || value.indexOf("Lithuania") !== -1 || value.indexOf("Luxembourg") !== -1 || value.indexOf("Malta") !== -1 || value.indexOf("Netherlands") !== -1 || value.indexOf("Poland") !== -1 || value.indexOf("Portugal") !== -1 || value.indexOf("Romania") !== -1 || value.indexOf("Slovakia") !== -1 || value.indexOf("Slovenia") !== -1 || value.indexOf("Sweden") !== -1 || value.indexOf("Switzerland") !== -1 ) {
        currencies[value] = "EUR";
      } else if(value.indexOf("Australia") !== -1) {
        currencies[value] = "AUD";
      } else {
        currencies[value] = "USD";
      }
    });
    
    // Handle country selection
    jQuery('#country-select').change(function() {
      const selectedCountry = jQuery(this).val();
      if (selectedCountry in currencies) {
        jQuery('#currency').val(currencies[selectedCountry]);
      }
    });
    
  
    // Handle "Shop with these settings" button click
    jQuery('#my-modal .modal-footer button').on('click', function() {
      const selectedCurrency = jQuery('#currency').val();
      if (selectedCurrency) {
        const url = window.location.href + '/' + '?currency=' + selectedCurrency;
        window.location.href = url;
      }
    });
  
  });