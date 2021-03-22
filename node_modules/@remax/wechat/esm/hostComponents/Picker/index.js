import { createHostComponent } from '@remax/runtime';
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker.html
 */
export var Picker = createHostComponent('picker');
Picker.defaultProps = {
    mode: 'selector',
    disabled: false,
    // FIXME: value 的值与 mode 类型变化
    // value: 0,
    range: [],
    fields: 'day',
};
