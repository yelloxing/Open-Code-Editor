
/**
 * <XXX ctrl-body-class:className='flag' />
 * 
 * 说明:flag==true的时候className添加到body页面
 * 
 * @author 你好2007
 * 
 * 2020年6月9日于大同
 */

import image2D from 'image2d';

let doit = function (el, binding) {

    if (binding.value) {
        image2D(document.body).addClass(binding.type);
    } else {
        image2D(document.body).removeClass(binding.type);
    }

}

export default {

    inserted: doit,
    update: doit

};