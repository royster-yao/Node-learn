/**
 *  package.json
 *      scripts:
 *          - 可以自定义一些命令
 *          - 定义以后可以直接通过npm来执行这些命令
 *          - start 和 test 可以直接通过npm start npm test执行
 *          - 其他命令需要通过npm run xxx执行
 *  npm镜像
 *      - npm的仓库的服务器位于国外，有时候并不好用
 *      - 为了解决这个问题，可以在npm中配置一个镜像服务器
 *      -   镜像配置：
 *          1.在系统中安装cnpm (不推荐)
 *              npm install -g cnpm --registry=https://registry.npmmirror.com
 *          2.彻底修改npm仓库地址
 *              npm set registry https://registry.npmmirror.com
 *              - 还原到原版仓库
 *              npm config delete registry
 *          3.查看自己的仓库地址
 *               npm config get registry
 */