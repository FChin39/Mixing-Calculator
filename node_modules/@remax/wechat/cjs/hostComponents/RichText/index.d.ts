import * as React from 'react';
import { BaseProps } from '../../types/component';
export interface RichTextProps extends BaseProps {
    /** 节点列表/HTML String 1.4.0 */
    nodes?: any[] | string;
    /** 显示连续空格 2.4.1 */
    space?: 'ensp' | 'emsp' | 'nbsp';
}
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html
 */
export declare const RichText: React.ComponentType<RichTextProps>;
