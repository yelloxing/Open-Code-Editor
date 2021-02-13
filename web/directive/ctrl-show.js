
let doit = function (el, binding) {

    if (binding.value == binding.type) {
        el.style.display = "";
    } else {
        el.style.display = "none";
    }

};

/**
 * <XXX ctrl-show:type='flag' />
 * 
 * 说明:在type==flag的时候控制显示,否则隐藏
 * 
 * @author 你好2007
 * 
 * 2020年6月9日于大同
 */

export default {

    // 指令生效的时候
    inserted: doit,

    // 被绑定于元素所在的组件中有数据更新时调用，而无论绑定值是否变化
    update: doit,

};