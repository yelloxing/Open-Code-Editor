/**
 * class原子操作
 * 
 * @author 你好2007
 * 
 * 2020年6月9日于大同
 */

// targetClass中是否包含checkClass

export function hasClass(targetClass, checkClass) {
    targetClass = " " + targetClass + " ";
    checkClass = " " + checkClass.trim() + " ";

    return targetClass.indexOf(checkClass) > -1;
}

// targetClass中删除checkClass

export function deleteClass(targetClass, checkClass) {
    targetClass = " " + targetClass + " ";
    checkClass = " " + checkClass.trim() + " ";

    while (targetClass.indexOf(checkClass) > -1) {
        targetClass = targetClass.replace(checkClass, " ");
    }

    // 最后调整一下
    return targetClass.trim().replace(/ +/g, " ");
}