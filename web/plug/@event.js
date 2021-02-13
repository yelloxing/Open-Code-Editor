import image2D from 'image2d';

window._OpenCodeEdit_EventData_ = undefined;

/**
 * 使用方式:
 * this.on(eventType, callback);    注册事件
 * this.trigger(eventType, data);   触发事件
 * 
 * 全局通信工具
 * 
 * @author 你好2007
 * 
 * 2020年6月10日于大同
 */

export default {
    install(QuickPaper) {

        QuickPaper.prototype.on = (eventType, callback) => {
            image2D(document.body).bind('oce@' + eventType, () => {
                callback(window._OpenCodeEdit_EventData_);
            });
        };

        QuickPaper.prototype.trigger = (eventType, data) => {
            window._OpenCodeEdit_EventData_ = data;
            image2D(document.body).trigger('oce@' + eventType);
        };

    }
};