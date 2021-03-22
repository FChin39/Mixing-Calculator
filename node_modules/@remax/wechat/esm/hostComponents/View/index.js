import { createHostComponent } from '@remax/runtime';
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/view.html
 */
export var View = createHostComponent('view');
View.defaultProps = {
    hoverClassName: 'none',
    hoverStopPropagation: false,
    hoverStartTime: 50,
    hoverStayTime: 400,
};
