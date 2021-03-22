import { createHostComponent } from '@remax/runtime';
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/button.html
 * https://q.qq.com/wiki/develop/miniprogram/component/form/button.html
 */
export var Button = createHostComponent('button');
Button.defaultProps = {
    hoverClassName: 'button-hover',
    hoverStartTime: 20,
    hoverStayTime: 70,
};
