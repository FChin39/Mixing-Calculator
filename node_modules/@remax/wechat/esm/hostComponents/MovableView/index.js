import { createHostComponent } from '@remax/runtime';
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html
 */
export var MovableView = createHostComponent('movable-view');
MovableView.defaultProps = {
    direction: 'none',
    inertia: false,
    outOfBounds: false,
    damping: 20,
    friction: 2,
    disabled: false,
    scale: false,
    scaleMin: 0,
    scaleMax: 10,
    scaleValue: 1,
    animation: true,
};
