import { createHostComponent } from '@remax/runtime';
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/image.html
 */
export var Image = createHostComponent('image');
Image.defaultProps = {
    mode: 'scaleToFill',
    webp: false,
    lazyLoad: false,
    showMenuByLongpress: false,
};
