(function (wp) {

    const {registerPlugin} = wp.plugins;
    const {PluginSidebar} = wp.editPost;
    const {PanelBody, TextControl, TextareaControl, ToggleControl} = wp.components;
    const {Fragment} = wp.element;
    const {withSelect, withDispatch} = wp.data;
    const {compose} = wp.compose;

    const RenéRoboterTextControl = compose(
        withDispatch(function (dispatch, props) {
            return {
                setMetaValue: function (value) {
                    dispatch('core/editor').editPost({meta: {[props.metaKey]: value}});
                }
            }
        }),
        withSelect(function (select, props) {
            return {
                metaValue: select('core/editor').getEditedPostAttribute('meta')[props.metaKey],
            }
        })
    )(function (props) {

        return (
            <TextControl
                type="text"
                label={props.label}
                value={props.metaValue}
                onChange={(content) => {
                    props.setMetaValue(content)
                }}
            />
        );
    });

    registerPlugin('roboterberg-sidebar', {
        render: function () {
            return (<Fragment>
                <PluginSidebar name="roboterberg-sidebar" title="René Roboters Sidebar" icon="smiley">
                    <PanelBody title="Wichtiges Zeugs" initialOpen={true}>
                        <RenéRoboterTextControl label="ROFL" metaKey="roboterberg_plugin_rofl"/>
                    </PanelBody>
                    <PanelBody title="Unwichtiges Zeugs" initialOpen={false}>
                        Yolo Welt 2 🤖⛰️
                    </PanelBody>
                </PluginSidebar>
            </Fragment>)
        }
    });

})(window.wp);
