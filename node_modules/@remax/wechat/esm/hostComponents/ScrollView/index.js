import { createHostComponent } from '@remax/runtime';
export var ScrollView = createHostComponent('scroll-view');
ScrollView.defaultProps = {
    upperThreshold: 50,
    lowerThreshold: 50,
    scrollX: false,
    scrollY: false,
    scrollWithAnimation: false,
    enableBackToTop: false,
    enableFlex: false,
    scrollAnchoring: false,
    refresherEnabled: false,
    refresherThreshold: 45,
    refresherDefaultStyle: 'black',
    refresherBackground: '#fff',
    refresherTriggered: false,
    enhanced: false,
    bounces: true,
    showScrollbar: true,
    pagingEnabled: false,
    fastDeceleration: false,
};
