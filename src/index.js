import {registerBlockType} from '@wordpress/blocks';

registerBlockType('roboterberg/simple', {
    title: 'René Roboters Block',
    icon: 'smiley',
    category: 'widgets',
    edit: () => <div>🤖⛰️</div>,
    save: () => <div>🤖⛰️</div>,
});