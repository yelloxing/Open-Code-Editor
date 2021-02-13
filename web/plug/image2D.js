
const image2D = nodeRequire('image2d');

import { hasClass, deleteClass } from '../server/$classSingle.js';

/**
 * 使用方式:import image2D from "image2d";
 * 
 * 加强版本的image2D,非加强部分请查询文档: https://hai2007.gitee.io/image2D/index.html
 * 
 * @author 你好2007
 * 
 * 2020年6月9日于大同
 */

// 在类上扩展方法
image2D.extend({

    // 阻止冒泡
    stopPropagation(event) {
        event = event || window.event;
        if (event.stopPropagation) { //这是其他非IE浏览器
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    // 阻止默认事件
    preventDefault(event) {
        event = event || window.event;
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }

});

// 在对象上扩展方法
image2D.prototype.extend({

    // 前一个兄弟
    previous() {
        return image2D(this[0].previousElementSibling || []);
    },

    // 后一个兄弟
    next() {
        return image2D(this[0].nextElementSibling || []);
    },

    // 尺寸
    size() {
        return {
            width: this[0].offsetWidth,
            height: this[0].offsetHeight
        };
    },

    // 判断是否存在该class
    hasClass(className) {
        return hasClass(this.attr('class'), className);
    },

    // 添加class
    addClass(className) {
        let targetClass = this[0].getAttribute('class') || "";
        if (!hasClass(targetClass, className)) {
            this[0].setAttribute('class', targetClass + " " + className);
        }
        return this;
    },

    // 删除class
    removeClass(className) {
        let targetClass = this[0].getAttribute('class') || "";
        if (hasClass(targetClass, className)) {
            this[0].setAttribute('class', deleteClass(targetClass, className));
        }
        return this;
    },

    // 触发事件
    trigger(eventType) {
        let event = document.createEvent('HTMLEvents');
        // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
        event.initEvent(eventType, true, false);
        this[0].dispatchEvent(event);
        return this;
    },

    // 查找孩子结点
    children() {
        return image2D(this[0].children);
    }

});

export default image2D;