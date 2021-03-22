import { createHostComponent } from '@remax/runtime';
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html
 */
export var Canvas = createHostComponent('canvas');
Canvas.defaultProps = {
    disableScroll: false,
};
