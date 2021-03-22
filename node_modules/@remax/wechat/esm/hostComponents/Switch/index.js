import { createHostComponent } from '@remax/runtime';
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/switch.html
 */
export var Switch = createHostComponent('switch');
Switch.defaultProps = {
    checked: false,
    disabled: false,
    type: 'switch',
    color: '#04BE02',
};
