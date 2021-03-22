import { createHostComponent } from '@remax/runtime';
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html
 */
export var LivePusher = createHostComponent('live-pusher');
LivePusher.defaultProps = {
    mode: 'RTC',
    autopush: false,
    muted: false,
    enableCamera: false,
    autoFocus: true,
    orientation: 'vertical',
    beauty: 0,
    whiteness: 0,
    aspect: '9:16',
    minBitrate: 200,
    maxBitrate: 1000,
    audioQuality: 'high',
    zoom: false,
    devicePosition: 'front',
    backgroundMute: false,
    mirror: false,
    remoteMirror: false,
    localMirror: 'auto',
    audioReverbType: 0,
    enableMic: true,
    enableAgc: true,
    enableAns: false,
    audioVolumeType: 'voicecall',
    videoWidth: 360,
    videoHeight: 640,
};
