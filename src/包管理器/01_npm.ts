/**
 *  package.json
 *      - package.json 是包的描述文件
 *      - node中该文件对项目进行描述
 *      - 每一个node项目必须有package.json
 * 
 *  命令:
 *      npm init (-y)初始化项目 创建package.json文件，需要回答问题(全部是默认值)
 *      npm install 包名 将指定的包下载到当前项目中
 *          install 发生了什么？
 *              1.将包下载到当前项目node_modules目录下
 *              2.会在package.json的dependencies(依赖)属性中添加一个新的属性
 *              3.会自动添加pack-lock.json文件
 *                  帮助加速npm下载的
 *      npm install会自动安装所有依赖
 *      npm install 包名 -g 全局安装
 *          - 全局安装是将包安装的计算机中
 *          - 全局安装的通常都是一些工具
 *      npm uninstall 包名 卸载
 */