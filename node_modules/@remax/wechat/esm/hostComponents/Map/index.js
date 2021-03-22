import { createHostComponent } from '@remax/runtime';
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/map.html
 */
export var Map = createHostComponent('map');
Map.defaultProps = {
    scale: 16,
    minScale: 3,
    maxScale: 20,
    showLocation: false,
    layerStyle: 1,
    rotate: 0,
    enable3D: false,
    showCompass: false,
    showScale: false,
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    enableSatellite: false,
    enableTraffic: false,
    setting: {},
};
