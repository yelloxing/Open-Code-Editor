
const { shell } = nodeRequire('electron');

/**
 * 
 * 打开外部浏览器链接方法集合
 * 
 * @author 你好2007
 * 
 * 2020年6月12日于大同
 */

export default {
    install(QuickPaper) {

        // github网站
        QuickPaper.prototype.openGithubLink = href => {
            shell.openExternal("https://github.com/" + href);
        };

    }
};