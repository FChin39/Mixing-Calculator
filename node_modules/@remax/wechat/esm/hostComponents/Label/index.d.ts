import * as React from 'react';
import { BaseProps } from '../../types/component';
export interface LabelProps extends BaseProps {
    /** 绑定控件的 id 1.0.0 */
    for?: string;
}
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/label.html
 */
export declare const Label: React.ComponentType<LabelProps>;
