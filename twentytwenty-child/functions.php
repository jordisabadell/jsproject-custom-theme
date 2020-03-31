<?php

//remove styles in-line https://wordpress.org/support/topic/remove-inline-styles-5/
add_action( 'wp_enqueue_scripts', function() {
    $styles = wp_styles();
    $styles->add_data( 'twentytwenty-style', 'after', array() );
}, 20 );

//add theme
function childtheme_parent_styles() {    
    wp_enqueue_style( 'parent', get_template_directory_uri().'/style.css' );
}
add_action( 'wp_enqueue_scripts', 'childtheme_parent_styles');
?>