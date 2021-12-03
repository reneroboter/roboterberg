const {TextControl} = wp.components;
const {withSelect, withDispatch} = wp.data;
const {compose} = wp.compose;

export default compose(
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