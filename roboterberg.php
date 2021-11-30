<?php
/**
 * Plugin Name: Roboterberg
 * Author: René Backhaus
 * Description: 🤖⛰️ Roboterberg is my personal test plugin for exploring the WordPress Gutenberg Editor 🤖⛰️
 *
 */

add_action('init', function () {
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

    wp_register_script(
        'roboterberg-block',
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']
    );
    register_block_type('roboterberg/simple', [
        'editor_script' => 'roboterberg-block',
    ]);
});


add_action('init', function () {
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/sidebar.asset.php');

    wp_enqueue_script(
        'roboterberg-sidebar',
        plugins_url('build/sidebar.js', __FILE__),
        ['wp-edit-post', 'wp-element', 'wp-components', 'wp-plugins', 'wp-data'],
        $asset_file['version']
    );
});
