import { createHostComponent } from '@remax/runtime';
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html
 */
export var Navigator = createHostComponent('navigator');
Navigator.defaultProps = {
    target: 'self',
    openType: 'navigate',
    delta: 1,
    hoverClassName: 'navigator-hover',
    hoverStopPropagation: false,
    hoverStartTime: 50,
    hoverStayTime: 600,
};
