<?php
/**
 * The template for displaying 404 pages (Not Found)
 */

get_header(); 

?>

	<div id="content" class="wrap group content-narrow <?php print $color ?>" role="main">

		<div class="text-center">
			<h1>Page Not Found</h1>
			<p>It looks like nothing was found at this location. Look for the page in the top menu - several of our pages have been reorganized. Or maybe try a search?</p>
			<p><?php get_search_form(); ?></p>
		</div><!-- .page-content -->

	</div><!-- #primary -->

<?php

get_footer();

?>