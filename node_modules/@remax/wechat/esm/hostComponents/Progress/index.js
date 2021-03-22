import { createHostComponent } from '@remax/runtime';
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/progress.html
 */
export var Progress = createHostComponent('progress');
Progress.defaultProps = {
    showInfo: false,
    borderRadius: 0,
    fontSize: 16,
    strokeWidth: 6,
    color: '#09BB07',
    activeColor: '#09BB07',
    backgroundColor: '#EBEBEB',
    active: false,
    activeMode: 'backwards',
    duration: 30,
};
