import * as path from 'path';
import hostComponents from '../hostComponents/node';
var EJS_TPL_ROOT = path.join(__dirname, '../../templates');
var plugin = function () {
    return {
        meta: {
            global: 'wx',
            template: {
                extension: '.wxml',
                tag: 'import',
                src: 'src',
            },
            style: '.wxss',
            jsHelper: {
                extension: '.wxs',
                tag: 'wxs',
                src: 'src',
            },
            ejs: {
                base: path.join(EJS_TPL_ROOT, 'base.ejs'),
                page: path.join(EJS_TPL_ROOT, 'page.ejs'),
            },
        },
        hostComponents: hostComponents,
        skipHostComponents: ['swiper-item'],
    };
};
export default plugin;
