import * as React from 'react';
import { BaseProps } from '../../types/component';
export interface SwiperItemProps extends BaseProps {
    /** 该 swiper-item 的标识符 1.9.0 */
    itemId?: string;
}
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html
 */
export declare const SwiperItem: React.ComponentType<SwiperItemProps>;
