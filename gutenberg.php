<?php
/**
 * Plugin Name: Roboterblock
 * Author: René Backhaus
 * Description: Simply the best Gutenberg block
 *
 */

add_action('init', function () {
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

    wp_register_script(
        'roboterblock',
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']
    );
    register_block_type('roboterblock/simple', [
        'editor_script' => 'roboterblock',
    ]);
});
