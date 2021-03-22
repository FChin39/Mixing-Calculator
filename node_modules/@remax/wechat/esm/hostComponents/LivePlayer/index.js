import { createHostComponent } from '@remax/runtime';
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html
 */
export var LivePlayer = createHostComponent('live-player');
LivePlayer.defaultProps = {
    mode: 'live',
    autoplay: false,
    muted: false,
    orientation: 'vertical',
    objectFit: 'contain',
    backgroundMute: false,
    minCache: 1,
    maxCache: 3,
    soundMode: 'speaker',
    autoPauseIfNavigate: true,
    autoPauseIfOpenNative: true,
};
