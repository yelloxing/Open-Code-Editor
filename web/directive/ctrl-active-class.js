
/**
 * <XXX ctrl-active-class:value='flag' />
 * 
 * 说明:flag==value的时候active添加到el
 * 
 * @author 你好2007
 * 
 * 2020年6月10日于大同
 */

import image2D from 'image2d';

let doit = function (el, binding) {

    if (binding.value == binding.type) {
        image2D(el).addClass('active');
    } else {
        image2D(el).removeClass('active');
    }

}

export default {

    inserted: doit,
    update: doit

};