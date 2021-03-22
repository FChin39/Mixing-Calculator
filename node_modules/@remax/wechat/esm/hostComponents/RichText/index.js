import { createHostComponent } from '@remax/runtime';
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html
 */
export var RichText = createHostComponent('rich-text');
RichText.defaultProps = {
    nodes: [],
};
