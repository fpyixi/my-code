# Git学习

## 一句话使用
* git pull origin main # 从远程分支克隆到本地仓库
* git clone git@github.com:fpyixi/my-repository.git # 从远程克隆到本地仓库
* git add . # 提交到暂存区
* git commit -m '描述' # 提交到本地仓库
* git push origin main # 提交到远程仓库

## 常用命令
* 清除暂存区中的文件
  * git rm -r --cached .
* 删除远程仓库中的文件
  * git rm -r --cached 文件路径
  * > 例如：git rm -r --cached git/git.txt
    >
    > 需要先pull(拉取远程仓库)，然后git add .(加入暂存区)，然后使用本命令，再git commit，最后push(提交到远程仓库)

## git学习网站
* [菜鸟教程-git](https://www.runoob.com/git/git-tutorial.html)

## .gitignore配置文件

* \# 表示注释 -> \# 这是注释

* / 表示目录 -> /git

* \* 多字符通配符 -> *.txt

* ? 单字符通配符 -> readme??.md

* ! 除此之外

  * > 假如我们只需要提交/mtk/one.txt文件，我们就可以这样写
    >
    > /mtk/*
    >
    > !/mtk/one.txt

## ssh连接配置
1. 使用git命令行
1. 输入 ssh-keygen -t 自定义ssh命名 -C '邮箱名'
* 例如：ssh-keygen -t gitSshKey -C "fpyixi@foxmail.com"
1. 生成 ssh 公钥
1. cat ~/.ssh/id_gitSshKey.pub
1. 生成 ssh 密钥
1. cat ~/.ssh/id_gitSshKey
1. gitee举例
1. 复制 ssh 公钥，仓库主页 「管理」->「部署公钥管理」->「添加部署公钥」
1. 设置标题，就是使用你的当前电脑的可用标识，如 redmibook16
1. 公钥即为 上述生成的 ssh 公钥
2. 在客户端 git 输入
3. ssh -T git@gitee.com
4. 输入yes
5. 输出 Hi, ... 即为成功

## git提交流程
1. 工作区 -> git add -> 暂存区
2. 暂存区 -> git commit -> 本地仓库
3. 本地仓库 -> git push -> 远程仓库
4. 远程仓库 -> git pull/git fetch -> 工作区

## 配置命令
* 列出当前配置：git config --list
* 列出Repository配置：git config --local --list
* 列出全局配置：git config --gllbal --list
* 列出系统配置：git config --system --list
* 配置用户信息：
  * 配置用户名：git config --global user.name "your name"
  * 配置用户邮箱：git config --global user.email "youemail@github.com"

## 分支管理
* 查看本地分支：git branch
* 查看远程分支：git branch -r
* 查看本地和远程分支：git branch -a
* 从当前分支，切换到其他分支：git checkout \<branch-name\>
* 创建并切换到新建分支：git checkout -b \<branch-name\>
* 删除分支：git branch -d \<branch-name\>
* 当前分支与指定分支合并：git merge \<branch-name\>
* 查看哪些分支已经合并到当前分支：git branch --merged
* 查看哪些分支没有合并到当前分支：git branch --no-merged
* 查看各个分支最后一个提交对象的信息：git branch -v
* 删除远程分支：git push origin --d \<branch-name\>
* 重命名分支：git branch -m \<oldbranch-name\> \<newbranch-name\>
* 拉取远程分支并创建本地分支：git checkout -b 本地分支名x origin/远程分支名x

## fetch指令
* 将某个远程主机的更新，全部取回本地：git fetch 远程主机名
* 取回特定分支：git fetch 远程主机名 分支名
* 取回特定分支，并拉取到本地分支：git fetch origin \<branch-name\>:\<local-name\>

## 文件暂存
* 添加改动到stash：git stash save "message"
* 删除暂存：git stash drop \<stash@{ID}\>
* 查看stash列表：git stash list
* 删除全部缓存：git stash clear
* 恢复改动：git stash pop \<stash@{ID}\>

## 花式撤销
* 撤销“工作区”修改：git checkout --\<file\>
* 暂存区文件撤销(不覆盖工作区)：git reset HEAD \<file\>
* 版本回退：git reset --(soft | mixed | hard) \<HEAD ~(num)\> | \<commit ID\>
  * 指令含义：
    * --hard: 回退全部，包括HEAD，index，working tree
    * --mixed: 回退部分，包括HEAD，index
    * --soft: 只回退HEAD

## 文档查询
* 展示Git命令大纲：git help (--help)
* 展示Git命令大纲全部列表：git help -a
* 展示具体命令说明手册：git help \<command\>

## 分支管理规范
* master分支
  * 主分支，用于部署生产环境的分支，确保稳定性
  * master分支一般由develop以及hotfix分支合并，任何情况下都不能直接修改diamante
* develop分支
  * develop为开发分支，通常情况下，保存最新完成以及bug修复后的代码
  * 开发新功能时，feature分支都是基于develop分支下创建的
* feature分支
  * 开发性能，基本上以develop为基础创建feature分支
  * 分支命名：feature/开头的为特性分支，命令规则：feature/user_module、feature/cart_module
* release分支
  * release为预上线分支，发布提测阶段，会以release分支代码为基准提测
* hotfix分支
  * 分支命名：hotfix/开头的为修复分支，它的命名规则与feature分支类似
  * 线上出现紧急问题时，需要及时修复，以master分支为基线，创建hotfix分支，修复完成后，需要合并到master分支和develop分支

## 差异比较
* 比较工作区与缓存区：git diff
* 比较缓存区与本地库最近一次commit内容：git diff --cached
* 比较工作区与本地最近一次commit内容：git diff HEAD
* 比较两个commit之间差异：git diff \<commit ID\> \<commit ID\>

## 基本概念
* 版本库.git文件：当我们使用git管理文件时，一般它会多出一个.git文件，我们称此为版本库
* 工作区：本地项目存放文件的位置
* 暂存区：通过add命令将工作区的文件添加到缓存区
* 本地仓库：使用commit命令可以将暂存区的文件添加到本地仓库
* 远程仓库：使用Github托管我们项目时，就是一个远程仓库

## Git文件状态
* 通过命令git status
  * untracked：在暂存区没有该文件
  * modified
  * staged：使用git add暂存