
/**
 * <XXX move-line:type='initSize' />
 * 
 * 说明:
 * 1.type=horizontal|vertical,控制水平或者垂直方向上两边的拖拽缩放
 * 2.initSize=["",""]初始化尺寸,这是为了calc准备的,如果不是calc,请填"normal"即可
 * 
 * @author 你好2007
 * 
 * 2020年6月9日于大同
 */

import image2D from "image2d";

export default {

    inserted(el, binding) {

        // 拖拽的那条线
        let target = image2D(el);

        // 控制的前置和后置结点
        let preTarget = target.previous();
        let nextTarget = target.next();

        if (binding.type == 'horizontal') {

            target.css({
                "border-left": "5px solid " + preTarget.css('background-color'),
                "border-right": "5px solid " + nextTarget.css('background-color')
            });

        } else {

            target.css({
                "border-top": "5px solid " + preTarget.css('background-color'),
                "border-bottom": "5px solid " + nextTarget.css('background-color')
            });

        }

        let key = { horizontal: 'width', vertical: 'height' }[binding.type];

        // 如果是普通的需要初始化大小
        if (binding.value[0] == 'normal') binding.value[0] = preTarget.size()[key];
        if (binding.value[1] == 'normal') binding.value[1] = nextTarget.size()[key];

        let position = null, dist = 0;
        let bodyElement = image2D(document.body);

        target.css({
            "cursor": "e-resize"
        }).bind('mousedown', event => {
            position = bodyElement.position(event);

            bodyElement.css({
                "cursor": "e-resize"
            });
        });

        // 辅助计算
        let calcNewSize = function (dist, value) {

            if (/^calc/.test(value)) {
                return value.replace(/\)/, ' - ' + dist + "px)");
            } else {
                return (value - dist) + "px";
            }

        };

        // 为了更流畅我们把触发后的交互绑定到body上
        // 由于业务的原因,我们有充分理由不需要提供事件解绑定动作,如果后续业务有改动,请注意这里
        bodyElement

            // 鼠标移动
            .bind('mousemove', event => {
                if (position == null) return;
                let currentPosition = bodyElement.position(event);

                if (binding.type == 'horizontal') {

                    dist += currentPosition.x - position.x;

                    preTarget.css('width', calcNewSize(-dist, binding.value[0]));
                    nextTarget.css('width', calcNewSize(dist, binding.value[1]));

                } else {

                    dist += currentPosition.y - position.y;

                    preTarget.css('height', calcNewSize(-dist, binding.value[0]));
                    nextTarget.css('height', calcNewSize(dist, binding.value[1]));

                }

                position = currentPosition;
            })

            // 鼠标放开
            .bind('mouseup', () => {
                position = null;
                bodyElement.css({
                    "cursor": "default"
                });
            });

    }

};