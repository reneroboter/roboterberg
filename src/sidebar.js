import ReneRoboterTextControl from './component/textcontrol'

(function (wp) {

    const {registerPlugin} = wp.plugins;
    const {PluginSidebar} = wp.editPost;
    const {PanelBody} = wp.components;
    const {Fragment} = wp.element;

    registerPlugin('roboterberg-sidebar', {
        render: function () {
            return (<Fragment>
                <PluginSidebar name="roboterberg-sidebar" title="René Roboters Sidebar" icon="smiley">
                    <PanelBody title="Wichtiges Zeugs" initialOpen={true}>
                        <ReneRoboterTextControl label="ROFL" metaKey="roboterberg_plugin_rofl"/>
                    </PanelBody>
                    <PanelBody title="Unwichtiges Zeugs" initialOpen={false}>
                        Yolo Welt 2 🤖⛰️
                    </PanelBody>
                </PluginSidebar>
            </Fragment>)
        }
    });

})(window.wp);
