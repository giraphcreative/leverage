




// onload responsive footer and menu stuff
jQuery(document).ready(function($){
	// select some things we'll use to make things responsive
	var menu = $( 'header nav' ),
		menu_toggle = $( 'button.menu-toggle' ),
		menu_ul = $( 'header nav' ),
		fluid_images = $( '.content-area img, .site-content img' ),
		sidebar = $( '.sidebar' ),
		large_title = $( '.large-title' ),
		left_menu = $( '.sidebar ul.menu' ),
		twitter_widget = $( '.widget_multi_twitter' );


	$(document).on('scroll', function() {
		if ( matchMedia('only screen and ( min-width: 1024px )').matches ) {
			if( $( this ).scrollTop() >= 30 ) {
				$( 'header' ).addClass( 'scrolled' );
			} else {
				$( 'header' ).removeClass( 'scrolled' );
			}
		} else {
			$( 'header' ).removeClass( 'scrolled' );
		}
	});


	// remove height and width from images inside
	fluid_images.removeAttr( 'width' ).removeAttr( 'height' );


	// show/hide menus when they click the toggler
	menu_toggle.click(function(){

		if ( menu_ul.is( ':visible' ) ) {
			menu_ul.hide();
		} else {
			menu_ul.show();
		}

		// when user clicks a link, open submenu if it exists.
		menu_ul.find( 'a' ).click(function(){
			var parent_li = $( this ).parent( 'li' );
			var submenu = $( this ).next( 'ul' );
			if ( !submenu.is( ':visible' ) && parent_li.hasClass( 'menu-item-has-children' ) ) {
				event.preventDefault();
				parent_li.addClass( 'open' );
				submenu.show();
			}
		});

	});


	// left menu toggling.
	$( '.sidebar ul.menu a' ).click(function( e ){
		var menu_item = $( this ).parent( 'li' );
		console.log( 'gets here' );
		console.log( menu_item );
		e.preventDefault();
		if ( !menu_item.hasClass( 'open' ) ) {
			menu_item.addClass( 'open' );
		} else {
			// location.href = $( this ).attr( 'href' );
		}
	});


	// accordion
	$( '.accordion-box-title' ).click(function(){
		$( this ).parent( '.accordion-box' ).children( '.accordion-box-content' ).slideToggle( 600 );
		$( this ).toggleClass( 'open' );
	});


	// fluid width videos that maintain aspect ratio
	$( '.content' ).fitVids();


	// search and replace leverage so it's italicized.
	$("header nav, .sidebar .widget, .slide-content, .thumbs").each(function(){
		$(this).html( $(this).html().replace(/Leverage/g,'<em>LEVERAGE</em>') );
	});


	// remove annoying non-breaking spaces from twitter widget
	if ( twitter_widget ) {
		twitter_widget.find('.tweet-time').each(function(){
			$(this).html( $(this).html().replace("&nbsp;-&nbsp;",'') );
		});
	}


	// button links (using the data-url attribute)
	$( 'button[data-url]' ).click(function(){
		window.location.href = $( this ).attr( 'data-url' );
	});


	
	// creep on links
	$(".wrap a").creep();


	// resize linqto iframe
	var resize_iframe = function(){
		if ( matchMedia('only screen and ( min-width: 1152px )').matches ) {
			$('iframe.auto-height').height( '1950px' );
		} else if ( matchMedia('only screen and ( min-width: 892px )').matches ) {
			$('iframe.auto-height').height( '2430px' );
		} else if ( matchMedia('only screen and ( min-width: 823px )').matches ) {
			$('iframe.auto-height').height( '3630px' );
		} else if ( matchMedia('only screen and ( min-width: 768px )').matches ) {
			$('iframe.auto-height').height( '2930px' );
		} else if ( matchMedia('only screen and ( min-width: 655px )').matches ) {
			$('iframe.auto-height').height( '2430px' );
		} else if ( matchMedia('only screen and ( min-width: 600px )').matches ) {
			$('iframe.auto-height').height( '3630px' );
		} else if ( matchMedia('only screen and ( min-width: 320px )').matches ) {
			$('iframe.auto-height').height( '2930px' );
		} else {
			$('iframe.auto-height').height( '2350px' );
		}
	}


	// resize linqto iframe
	resize_iframe();
	$(window).resize( resize_iframe );

});

