import { registerBlockType } from '@wordpress/blocks';
 
registerBlockType( 'roboterblock/simple', {
    title: 'Roboterblock',
    icon: 'smiley',
    category: 'widgets',
    edit: () => <div>🤖</div>,
    save: () => <div>🤖</div>,
} );