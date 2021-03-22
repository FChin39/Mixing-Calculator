import { createHostComponent } from '@remax/runtime';
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/radio.html
 */
export var Radio = createHostComponent('radio');
Radio.defaultProps = {
    checked: false,
    disabled: false,
    color: '#09BB07',
};
