import { createHostComponent } from '@remax/runtime';
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/form.html
 */
export var Form = createHostComponent('form');
Form.defaultProps = {
    reportSubmit: false,
    reportSubmitTimeout: 0,
};
