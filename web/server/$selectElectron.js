/**
 * 选择文件或文件夹
 * 
 * @author 你好2007
 * 
 * 2020年6月11日于大同
 */

const { dialog } = nodeRequire('electron').remote;
const os = nodeRequire('os');

let doit = function (type, callback, title, defaultPath) {

    // 只有回调是必输的
    title = title || "选择文件夹";
    defaultPath = defaultPath || os.homedir();

    dialog.showOpenDialog({
        title,
        properties: [type],
        // defaultPath
    }).then(result => {
        if (result.canceled) {

            // 取消了

        } else {
            callback(result.filePaths[0]);
        }
    });

};

// 选择文件夹
export function selectFolder(callback, title, defaultPath) {
    doit("openDirectory", callback, title, defaultPath);
};

// 选择文件
export function selectFile(callback, title, defaultPath) {
    doit("openFile", callback, title, defaultPath);
};