## git使用

* git pull origin master # 从远程分支克隆到本地仓库
* git clone git@github.com:fpyixi/my-repository.git # 从远程克隆到本地仓库
* git add . # 提交到暂存区
* git commit -m '描述' # 提交到本地仓库
* git push origin master # 提交到远程服务器

# 规范使用 git -> github



# 一、gitee 国内git仓库管理

## 1. 新建仓库

![img](git%E4%BD%BF%E7%94%A8.assets/1649947273485-f91dffb6-8234-48fb-829a-d44db9653f83.png)

![img](git%E4%BD%BF%E7%94%A8.assets/1649947445100-25e27eff-1ca2-4bfe-a9e2-e08c4f3f9a7a.png)

## 2. 克隆仓库 https方式

**缺点：**

- 每次使用都需要进行用户名和密码登录

## 3. 克隆仓库 ssh 方式

### 3.1 创建 ssh 公钥

```shell
# Gitee 提供了基于 SSH 协议的 Git 服务，
# 在使用 SSH 协议访问仓库之前，
# 需要先配置好账号/仓库的 SSH 公钥

# 在客户端安装 git, 然后在 git 命令行中输入
ssh-keygen -t 自定义ssh命名 -C 邮箱名
# 举例：ssh-keygen -t gitee666 -C "fpyixi@foxmail.com"
# git666 -> 自定义的 ssh 公钥名
# "fpyixi@foxmail.com" 在 gitee 注册的用户邮箱

# 生成 ssh 公钥
cat ~/.ssh/id_gitee666.pub
# ssh-keyfp666 AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc...

# 生成 ssh 秘钥
cat ~/.ssh/id_gitee666
# 这就是秘钥

# 复制 ssh 公钥，仓库主页 「管理」->「部署公钥管理」->「添加部署公钥」
# 设置标题，就是使用你的当前电脑的可用标识，如 redmibook16
# 公钥即为 上述生成的 ssh 公钥

# 在客户端 git 输入
ssh -T git@gitee.com
# 输入 yes
# 输出 Hi, ...    即为成功
```

### 3.2 克隆gitee中的仓库

```shell
# 选择一个文件夹，该文件夹用于从gitee 中克隆的仓库
cd D:/desktop/web开发/
git clone git@gitee.com:fpyixi-gits/vue-demo.git
# git clone ... -> 即为克隆git仓库
# git@gitee.com:fpyixi-gits/vue-demo.git -> 即为gitee 中仓库的 ssh
```

## 4. 提交代码到远程仓库中去

![img](git%E4%BD%BF%E7%94%A8.assets/1649949410369-cc9f435a-a42a-4e9c-b6f5-b8ffd3256a8e.png)

```shell
# 进入克隆的仓库里面，带 .git 文件夹的就是，输入
git status # 默认当前分支是 master

# 把该文件夹的内容上传到 暂存区
git add .

# 清除暂存区中的文件
git rm -r --cached .

# 把暂存区的文件上传到本地仓库
git commit -m "本次上传的描述"
# -m -> 即对这次上传的描述，在gitee 仓库可见

# 第一次使用，此时会报错，提示我们配置一下自己的邮箱和用户名，配置一下就行
git config --global user.email "fpyixi@foxmail.com"
git config --global user.name "fpyixi"
# 配置成功了，我们再次执行上面的 git commit 即可

# 从本地仓库上传到远程仓库
git push origin master
# 最后命令行中出现
# --> master 指向上传的仓库分支，即成功了

# 从远程仓库把代码拉下来
git pull origin master

# 养成一个好习惯
# 每次使用项目的时候从 git 中拉代码下来
# 因为: 一个项目一般都是团队开发，别人会对仓库中项目进行更改，
# 所以你本地的项目已经不是最新的了，需要自己从仓库中把项目拉下来

# 提示
# 执行命令后，出现 fatal 或 error 关键词，即表示执行该命令失败
```

# 二、github 国外git仓库管理

## 创建 SSH 协议 并 绑定 github

<span style='color:red'>ssh-keygen -t ed25519 -C '你的邮箱全名</span>

`-t` 是加密模式，`-C` 是你的邮箱全名。

github 支持什么加密模式呢？看下图

![image-20220710085050551](git%E4%BD%BF%E7%94%A8.assets/image-20220710085050551.png)

![image-20220710094606599](git%E4%BD%BF%E7%94%A8.assets/image-20220710094606599.png)

cd 进入这个目录，id_ed25519.pub 为公钥，id_ed25519 为私钥，cat xxx.pub 复制全部粘贴到上上图中 Key 的位置上。

## 克隆远程仓库到本地仓库

<span style="color: red">git clone git@github.com:fpyixi/my-source.git</span>



# 本地仓库和远程服务器仓库的连接

## 查看连接

git remote -v

## 添加连接

git remote add origin git@github.com:fpyixi/my-source.git

## 删除连接

git remote remove origin



# 修改本地分支名

![image-20220710102759013](git%E4%BD%BF%E7%94%A8.assets/image-20220710102759013.png)

本地分支与远程分支不一致，会导致无法上传，github 改原来 master分支为 main分支。

## 修改本地分支名

git branch -m 旧分支名 新分支名

## 删除远程分支名

git push --delete origin 旧远程分支名

## 将本地分支推送到远程分支进行关联

git push --set-upstream origin 新远程分支名

此时远程可以没有该分支，直接将远程没有的分支，通过这种方式创建一个分支



# 修改 git config 配置

## 查看 git config 配置信息

```shell
# 查看 git config 帮助信息
git config

# 查看 git config 帮助信息（网页版）
git config --global -help

# 查看 git config 配置信息
git config -l
# 全局配置信息
git config --global -l
```

## 删除某个config 配置

```shell
git config --global --unset user.name
```



# 其他信息

## 修改本地默认分支

git config --global init.defaultBranch main



# 常见的命令

## 文件与目录管理

```shell
# cd ~ 进入用户目录
# cd / 进入根目录

pwd # 显示当前路劲
ls # 列出目录及文件名
cd # 切换目录
mkdir # 新建一个目录
rmdir # 删除一个目录
cp # 复制文件/目录
rm # 删除文件/目录
mv # 移动文件/目录
```



<img src="git%E4%BD%BF%E7%94%A8.assets/145b0cdfa98a4a9cb724d745a1466c47tplv-k3u1fbpfcp-zoom-in-crop-mark4536000.image" alt="Git脑图" style="zoom:200%;" />
