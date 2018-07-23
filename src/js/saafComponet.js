/*
 * saaf Component *
 * sie ng1版本的组件库
 */
(function (root, factory) {
        if (typeof module !== 'undefined' && module.exports) {
            // CommonJS
            if (typeof angular === 'undefined') {
                factory(require('angular'));
            } else {
                factory(angular);
            }
            module.exports = 'saafComponet';
        } else if (typeof define === 'function' && define.amd) {
            // AMD
            define(['angular'], factory);
        } else {
            // Global Variables
            factory(root.angular);
        }
    }(this, function (angular) {
        'use strict';

    })
)