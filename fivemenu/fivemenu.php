<?php
/**
 * Plugin Name:       Fivemenu
 * Description:       A five catagory menu
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Maurice Yu
 * License:           TBD
 * License URI:       TBD
 * Text Domain:       fivemenu
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_fivemenu_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_fivemenu_block_init' );
