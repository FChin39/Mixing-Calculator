import { createHostComponent } from '@remax/runtime';
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/editor.html
 */
export var Editor = createHostComponent('editor');
Editor.defaultProps = {
    readOnly: false,
    showImgSize: false,
    showImgToolbar: false,
    showImgResize: false,
};
