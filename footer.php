<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

$color = get_cmb_value( 'large-title-color' );
if ( empty( $color ) ) $color = 'forest';

?>	
	
	</div>

</section>

<div class="subscribe">
	<form name="subscribe" action="/subscribe/" method="get">
		<label>Subscribe: <input type="text" name="email" placeholder="johnsmith@mycu.com" /></label>
		<input type="submit" class="btn-arrow" value="Subscribe" />
	</form>
</div>

<footer class="footer">
		<div class="column first">
			<h3>Connect With Us</h3>
			<div class="sub-column first">
				3692 Coolidge Court<br />
				Tallahassee, Florida 32311
			</div>
			<div class="sub-column">
				22 Inverness Cntr Pky, #200<br />
				Birmingham, Alabama<br />
				866.231.0545</p>
			</div>
			<div class="social">
				<a href="https://twitter.com/LeagueofSECUs" target="_blank"><img src="<?php bloginfo( 'template_url' ); ?>/img/social-twitter.png"></a><a href="https://www.facebook.com/LeagueofSoutheasternCreditUnions?ref=hl" target="_blank"><img src="<?php bloginfo( 'template_url' ); ?>/img/social-facebook.png"></a><a href="https://www.linkedin.com/company/1007350?trk=tyah&trkInfo=clickedVertical%3Acompany%2Cidx%3A1-1-1%2CtarId%3A1428961608364%2Ctas%3Amy+leverage" target="_blank"><img src="<?php bloginfo( 'template_url' ); ?>/img/social-linkedin.png"></a><a href="https://www.youtube.com/user/LeagueofSECUs" target="_blank"><img src="<?php bloginfo( 'template_url' ); ?>/img/social-youtube.png"></a>
			</div>
		</div>
		<div class="column">
			<h3>Links</h3>
			<div class="sub-column first">
				<?php wp_nav_menu( array( 'theme_location' => 'footer-one' ) ); ?>	
			</div>
			<div class="sub-column">
				<?php wp_nav_menu( array( 'theme_location' => 'footer-two' ) ); ?>
			</div>
		</div>
</footer><!-- #colophon -->

<?php 

do_interstitial();

wp_footer();

?>
</body>
</html>