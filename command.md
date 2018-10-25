## 熟悉CMD常用命令
- help 帮助 
- cls 清屏 
- cd 打开某个文件　cd ../  返回上一层
- edit 退出cmd.exe(命令解释程序) 

- copy  复制文件
- rename 重命名文件
- dir  显示文件和子目录
- mkdir 建立子目录 
- rmdir 删除目录。
- del 删除文件
- date 显示及修改日期 
```
  在CMD中输入：echo 内容 >>文件保存路径，例如：
  echo 创建一个.txt文件>>d:\a.txt  就是创建一个内容为：“创建一个.txt文件”的a.txt文件，
  ，保存到D盘。
```
## 熟悉node命令

- npm install -g
- npm cache clean 
- 如果安装失败，可以使用 npm cache clean 清理缓存，然后再重新安装
- vue init webpack    //初始化vue
- cnpm install      //安装依赖
- npm run dev       //启动项目
- npm run build     //发布项目 生成dist目录  只要把dist目录上的文件发布上去就行了

## 熟悉git命令

- 安装git

- 在安装了git for windows之后，个人总是忘记配置git config的命令，以此记录一下：

- 配置用户名和邮箱的命令
```
git config --global user.name "youname"
git config --global user.email "youeamil@email.com"
```

- 其他配置
  让Git显示颜色，会让命令输出看起来更醒目
```
$ git config --global color.ui true  
```
  配置别名
```
$ git config --global alias.unstage 'reset HEAD'
```
  当你敲入命令：
$ git unstage test.py
  实际上Git执行的是：
$ git reset HEAD test.py

- 配置一个git last，让其显示最后一次提交信息：
```
$ git config --global alias.last 'log -1'
```
- 这样，用git last就能显示最近一次的提交：

配置查看提交记录
```
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

配置Git的时候，加上--global是针对当前用户起作用的，如果不加，那只针对当前的仓库起作用。
配置文件放哪了？每个仓库的Git配置文件都放在.git/config文件中：
```
$ cat .git/config 
[core]
    repositoryformatversion = 0
    filemode = true
    bare = false
    logallrefupdates = true
    ignorecase = true
    precomposeunicode = true
[remote "origin"]
    url = git@github.com:michaelliao/learngit.git
    fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
    remote = origin
    merge = refs/heads/master
[alias]
    last = log -1
```
别名就在[alias]后面，要删除别名，直接把对应的行删掉即可。
而当前用户的Git配置文件放在用户主目录下的一个隐藏文件.gitconfig中：
```
$ cat .gitconfig
[alias]
    co = checkout
    ci = commit
    br = branch
    st = status
[user]
    name = Your Name
    email = your@email.com
```
配置别名也可以直接修改这个文件，如果改错了，可以删掉文件重新通过命令配置。

```
在GitHub创建项目https://github.com/shiHunYongZhe/hjz.git

本地新建文件夹hjz

打开本地hjz  右键Git bash（以下皆在Git 命令行中执行）

Git init

git本地仓库关联远程仓库的两种方式：
1.将远程的代码clone到本地仓库
2.将本地的代码关联到远程仓库

1.git clone现有的项目（https | SSH）
SSH：
检查你的电脑中是否有密匙对id_rsa id_rsa.pub
没有的话，创建密匙对  
ssh-keygen -t rsa  -C "你的git中设置的邮箱"
可以一直回车，直到创建出了image

找到.ssh文件夹
用sublime等软件打开得到的公钥文件id_rsa.pub，而id_rsa是私钥，不能泄露。然后将公匙复制后添加到github的账号setting的SSH and GPG key中，填上任意title，在文本框粘贴公钥内容（确定需要确认密码）

测试是否能够连接ssh -T git@github.com
克隆到本地git clone git@github.com:ShiHunYongZhe/hjz.git

2.将本地的已有项目关联到github上的新的项目上
在github上新建一个仓库，然后在本地仓库中执行

（查看远程库的信息，用git remote
用git remote -v显示更详细的信息）

git remote add origin git@github.com:ShiHunYongZhe/hjz.git
origin是仓库的名字，可能你的本地项目关联着几个仓库，你可以根据仓库的名字
git push origin master 将代码提交到不同仓库中，可以指定分支
然后执行git pull origin master 先将github上的代码pull下来
然后再git push origin master
（因为Git使用SSH连接，而SSH连接在第一次验证GitHub服务器的Key时，需要你确认GitHub的Key的指纹信息是否真的来自GitHub的服务器，输入yes回车即可。）



将本地的仓库和远程的仓库进行关联（不要使用https，使用ssh）（使用https除了速度慢以外，还有个最大的麻烦是每次推送都必须输入口令）
```
git remote add origin git@github.com:shiHunYongZhe/hjz.git
```
将新建的main.m文件添加到仓库(这样git就会追踪这个文件)，实际上就是把文件修改添加到暂存区，每次修改，如果不用git add到暂存区，那就不会加入到commit中。
git add main.m

我们可以利用git status查看状态

把文件提交到仓库，实际上就是把暂存区的所有内容提交到当前分支。
git commit -m "新建了一个man.m文件"

如果远程库有文件,需要先 git pull ，再Git push

把本地库的内容推送到远程
git push -u origin master

我们用浏览器进入远程仓库中查看,发现远程仓库中也出现了mian.m文件
在GitHub上免费托管的Git仓库，任何人都可以看到喔（但只有你自己才能改）。所以，不要把敏感信息放进去


从远程库clone时，默认情况下，只能看到本地的master分支。可以用git branch命令看看：
$ git branch
现在，你要在dev分支上开发，就必须创建远程origin的dev分支到本地，于是他用这个命令创建本地dev分支：
$ git checkout -b dev origin/dev
现在，就可以在dev上继续修改，然后，时不时地把dev分支push到远程：
如果远程库有文件更新,需要先 git pull ，再Git push
把本地库的内容推送到远程
git push -u origin master

本地新建的分支如果不推送到远程，对其他人就是不可见的；
从本地推送分支，使用git push origin branch-name，如果推送失败，先用git pull抓取远程的新提交；
在本地创建和远程分支对应的分支，使用git checkout -b branch-name origin/branch-name，本地和远程分支的名称最好一致；
建立本地分支和远程分支的关联，使用git branch --set-upstream branch-name origin/branch-name；
从远程抓取分支，使用git pull，如果有冲突，要先处理冲突。




删除origin：git remote rm origin 
—>重新增加origin：git remote add origin git@github.com:username/repository.git 
—>提交：git push -u origin master
查看记录  git log
如果嫌输出信息太多，看得眼花缭乱的，可以试试加上--pretty=oneline参数：
git log --pretty=oneline

现在，我们要把当前版本append GPL回退到上一个版本add distributed，就可以使用git reset命令：
git reset --hard HEAD^
只要上面的命令行窗口还没有被关掉，你就可以顺着往上找，找到那个append GPL的commit id是1094adb...，于是就可以指定回到未来的某个版本：

$ git reset --hard 1094a
（版本号没必要写全，前几位就可以了，Git会自动去找。当然也不能只写前一两位，因为Git可能会找到多个版本号，就无法确定是哪一个了。）

在Git中，总是有后悔药可以吃的。当你用$ git reset --hard HEAD^回退到add distributed版本时，再想恢复到append GPL，就必须找到append GPL的commit id。Git提供了一个命令git reflog用来记录你的每一次命令：

提交后，用git diff HEAD -- 文件名  
命令可以查看工作区和版本库里面最新版本的区别：

场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。

场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD <file>，就回到了场景1，第二步按场景1操作。

场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。


确实要从版本库中删除文件，那就用命令git rm删掉，并且git commit

或者要是删错了，版本库里还有的话可以很轻松地把误删的文件恢复到最新版本：
$ git checkout -- 1.txt
git checkout其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。


查看分支：git branch

创建分支：git branch <name>

切换分支：git checkout <name>

创建+切换分支：git checkout -b <name>

合并某分支到当前分支：git merge <name>

删除分支：git branch -d <name>

当分支dev工作完成，要合并dev的内容到master上，
我们就先切换回master分支：
$ git checkout master
再把dev分支的工作成果合并到master分支上：
$ git merge dev
合并完成后，就可以放心地删除dev分支了：
$ git branch -d dev
删除后，查看branch，就只剩下master分支了：
$ git branch


开发一个新feature，最好新建一个分支；
如果要丢弃一个没有被合并过的分支，可以通过git branch -D <name>强行删除。


从本地推送分支，使用git push origin branch-name，如果推送失败，先用git pull抓取远程的新提交；

在本地创建和远程分支对应的分支，使用git checkout -b branch-name origin/branch-name，本地和远程分支的名称最好一致；

建立本地分支和远程分支的关联，使用git branch --set-upstream branch-name origin/branch-name；

从远程抓取分支，使用git pull，如果有冲突，要先处理冲突。

rebase操作可以把本地未push的分叉提交历史整理成直线；
rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。

- 添加一个文件到Git，但发现添加不了，原因是这个文件被.gitignore忽略了：
- 可以用-f强制添加到Git：
- $ git add -f App.class
- 忽略某些文件时，需要编写.gitignore；
- .gitignore文件本身要放到版本库里，并且可以对.gitignore做版本管理！


- 命令git tag <tagname>用于新建一个标签，默认为HEAD，也可以指定一个commit id；
- 命令git tag -a <tagname> -m "blablabla..."可以指定标签信息；
- 命令git tag可以查看所有标签。
- 如果标签打错了，也可以删除：
$ git tag -d v0.1
- 如果要推送某个标签到远程，使用命令git push origin <tagname>：
$ git push origin v1.0
- 或者，一次性推送全部尚未推送到远程的本地标签：
$ git push origin --tags
- 如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除：
$ git tag -d v0.9
- 然后，从远程删除。删除命令也是push，但是格式如下：
$ git push origin :refs/tags/v0.9
```

常用命令
```
git pull(等同于git fetch + git merge)
git add *
git commit -m 'add'
git push
```
