import { createHostComponent } from '@remax/runtime';
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html
 */
export var Checkbox = createHostComponent('checkbox');
Checkbox.defaultProps = {
    disabled: false,
    checked: false,
    color: '#09bb07',
};
