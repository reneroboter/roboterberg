(function (wp) {

    const {registerPlugin} = wp.plugins;
    const {PluginSidebar} = wp.editPost;

    const icon = 'smiley'
    registerPlugin('roboterberg-sidebar', {
        render: function () {
            return (
                <PluginSidebar name="roboterberg-sidebar" title="René Roboters Sidebar" icon={icon}>
                    Yolo Welt 🤖⛰️
                </PluginSidebar>
            )
        }
    });

})(window.wp);
