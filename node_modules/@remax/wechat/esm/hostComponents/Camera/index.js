import { createHostComponent } from '@remax/runtime';
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/camera.html
 */
export var Camera = createHostComponent('camera');
Camera.defaultProps = {
    mode: 'normal',
    resolution: 'medium',
    devicePosition: 'back',
    flash: 'auto',
    frameSize: 'medium',
};
