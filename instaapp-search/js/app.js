window.Instagram = {
	/**
	* Store application credentials
	*/
	config: {},

	BASE_URL: 'https://api.instagram.com/v1',

	init: function( opt ) {
		opt = opt || {};

		this.config.client_id = opt.client_id;
	},

	popular: function( callback ) {		
	var endpoint = this.BASE_URL + '/media/popular?client_id=' + this.config.client_id;
		this.getJSON( endpoint, callback );
	},

/**
	* List of recently tagged media
	*/

	tagsByName: function ( name, callback ) {
		var endpoint = this.BASE_URL + '/tags/' + name + '/media/recent?client_id=' + this.config.client_id;
		this.getJSON( endpoint, callback );
	},

	getJSON: function( url, callback ) {

		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'jsonp',
			success: function( response ) {
				if ( typeof callback === 'function' ) callback( response );
			}
		});
	}

};

Instagram.init ({
	client_id: '4f1e8b5ed8a846c78250ebc97797b39d'
});
