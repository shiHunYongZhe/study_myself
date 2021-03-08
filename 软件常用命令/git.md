## 正常流程
**配置用户名和邮箱的命令**
- git config --global user.name "yourgithubname"
- git config --global user.email "youreamil@email.com"
**配置git别名**
```
git config --global alias.co checkout # 别名
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.br branch
git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%
d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"
git config --global alias.last 'log -1 HEAD'
```
**提高命令输出的可读性**
```
git config --global color.ui auto
```
### 关联远程仓库

首先必须明确一点：
本地Git仓库和GitHub仓库之间的传输是通过SSH加密的
- 创建SSH KEY。打开Shell(Windows下打开Git Bash)，创建SSH KEY：`ssh-keygen -t rsa -C “youreamil@email.com”`，可以一直回车，直到创建出了image
- 一切顺利的话，可以在用户主目录里找到.shh目录，里面有id_rsa和id_rsa.pub两个文件，这两个就是SSH KEY的秘钥对，id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人
- 登录GitHub，打开”Account settings”，”SSH Keys”页面： 点击”Add SSH Key”， 填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容
`git remote add origin [remote-url]` 可以给本地库与远程库建立连接将本地的仓库和远程的仓库进行关联（不要使用https，使用ssh）（使用https除了速度慢以外，还有个最大的麻烦是每次推送都必须输入口令
`git push -u origin master` 将工作区的文件推送到远程仓库
-u参数不但会把本地的master分支内容推送到远程新的master分支，还会在它们之间建立联系，以后命令可以简化为git push

## 先拿到远程代码再进行开发的
```
git clone [url] 克隆远程库，默认是master分支 
git clone -b [branchname] [url] 本地新建一个克隆远程库的分支 
```
## 直接本地开发的
新建文件夹demo并打开，右键git init，之后直接看下方的本地关联远程仓库（注意文件夹名称要与远程仓库名一致，比如这里的远程仓库名应为git@github.com:ShiHunYongZhe/demo.git）
#### git常见操作
```

git config –-list 查看config配置
git add . 把文件添加到缓存区（索引区），Git会自动为我们创建第一个分支master，以及指向master的第一个指针叫HEAD。

git status 查看状态
git commit -m “ss” 向工作区提交并且注释”ss” 
git status 查看状态
git push（此时无法提交，看下方的本地关联远程仓库）

git rm [filename]删除暂存区的某个指定文件
git co .   删除未commit的本地文件
git clean -f   删除未add的本地文件
```
如果删错了工作区的文件， 
- git checkout -- [filename]可以把某个文件在工作区的修改撤销。
- git checkout . 可以把全部未 add 的 文件在工作区的修改撤销。就是回到最近一次git commit或git add的状态。
- git reset HEAD [filename]可以把暂存区的修改撤销掉，重新放回工作区。
测试分支时有时成功拉到代码但不起作用，可以试试本地/测试重置分支，最不济可以重启服务器
回退分支
- git reset --hard commit_id    可以把本地分支重置为commit_id时的分支
- git push -f origin 分支名     将本地分支强制覆盖到远程分支


## 多人协作
**工作要求**
每次新建分支一般都是基于 develop或者master分支 的最新代码来切的，
git push 和 git merge 之前记得要 git pull
每次提交代码只提交本人改变的文件，不要一股脑把变动的文件都提交
git reset --hard 分支 将本分支重置为某一分支代码
- 当从远程克隆仓库时，联系自动建立，origin默认为远程库。
	git remote -v展示更多远程库的信息。
	git branch -a 展示远程分支
- 多人合作时，如果有人从远程库直接克隆，默认情况下，只能看到本地的master分支。
### 分支管理
- 多个人参与项目时，不同人创建利用不同的分支，合并中会出现一些问题。
**创建和合并分支**
	创建分支 git checkout -b dev 
	相当于 git branch dev 和 git checkout dev
**切换到远程已有而本地没有的分支**
  他人新建了分支并已推送，自己本地要在他的分支上做修改，一般是获取远程最新代码后直接checkout到他人的分支，这样自己本地就有一个该分支关联的本地分支了
- 一般来说git pull/push 后接 origin 分支名，就不用每次都git branch --set-upstream-to=origin/newbranch dev关联远程分支，与其缩写git pull/push各有优劣

#### 合并分支
- 工作完成git push，可能会产生冲突，比如已经有另外一个人向origin/dev分支推送了他的提交，而碰巧这个人也想对该文件作出修改并推送。 
发生冲突，这时候就应该先 git pull把最新的提交从origin/dev抓下来，在本地合并，解决冲突(`git diff `查看文件更改内容)，再推送内容。
- git pull后若数据库文件有修改，本地数据库也要做相应修改
- 如果出现git pull失败，说明本地分支dev没有和远程库分支dev建立联系，需要远程分支关联 git branch --set-upstream-to=origin/newbranch dev
- ps:git本地新建一个分支后，必须要做远程分支关联。如果没有关联，git会在下面的操作中提示你显示的添加关联。关联目的是如果在本地分支下操作： git pull, git push ，不需要指定在命令行指定远程的分支．推送到远程分支后，你只要没有显示指定，git pull的时候，就会提示你。

- 之后切换为develop分支`git checkout develop`，然后`git merge dev`将dev分支合并到远程master的预发布develop分支，成功之后`git branch -D dev`删除分支dev

#### 多分支工作时需来回切换
- 多分支未上传切换保存当前文件修改时使用git stash(新增而非修改的文件记得先add一次，未曾被git追踪的文件无法被git stash所关联到)
```
（1）git stash save "save message"  : 执行存储时，添加备注，方便查找，只有git stash 也要可以的，但查找时不方便识别。

（2）git stash list  ：查看stash了哪些存储

（3）git stash show ：显示做了哪些改动，默认show第一个存储,如果要显示其他存贮，后面加stash@{$num}，比如第二个 git stash show stash@{1}

（4）git stash show -p : 显示第一个存储的改动，如果想显示其他存存储，命令：git stash show  stash@{$num}  -p ，比如第二个：git stash show  stash@{1}  -p

（5）git stash apply :应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储,即stash@{0}，如果要使用其他个，git stash apply stash@{$num} ， 比如第二个：git stash apply stash@{1} 

（6）git stash pop ：命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下,默认为第一个stash,即stash@{0}，如果要应用并删除其他stash，命令：git stash pop stash@{$num} ，比如应用并删除第二个：git stash pop stash@{1}

（7）git stash drop stash@{$num} ：丢弃stash@{$num}存储，从列表中删除这个存储

（8）git stash clear ：删除所有缓存的stash
```
- 删除 untracked files 
- `git clean -f `
- #连 untracked 的目录也一起删掉
- `git clean -fd`

## 当想撤销中间某次提交时，强烈建议使用revert命令

```
git revert commit_id
//如果commit_id是merge节点的话
//接着就是解决冲突
git commit -am "commit信息"
git push
```
### git revert 和 git reset 的区别
git revert -n git提交 反向操作某个提交的操作，比如该提交增加了 a 文件，则本地 revert 后 a 文件会自动删除，修改同理，适合回滚提交历史，（git revert -n 后要记得 commit -m 之后再 push）
如果我们想撤销之前的某一版本，但是又想保留该目标版本后面的版本，记录下这整个版本变动流程，也可以用这种方法。
git revert 和 git reset 的区别
1. git revert 是用一次新的 commit 来回滚之前的 commit，git reset 是直接删除指定的 commit。
2. 在回滚这一操作上看，效果差不多。但是在日后继续 merge 以前的老版本时有区别。因为 git revert 是用一次逆向的 commit“中和”之前的提交，因此日后合并老的 branch 时，导致这部分改变不会再次出现，但是 git reset 是之间把某些 commit 在某个 branch 上删除，因而和老的 branch 再次 merge 时，这些被回滚的 commit 应该还会被引入。
3. git reset 是把 HEAD 向后移动了一下，而 git revert 是 HEAD 继续前进，只是新的 commit 的内容和要 revert 的内容正好相反，能够抵消要被 revert 的内容。

### 将Git 项目迁移到另一个仓库
我们假设旧仓库的项目名称叫`old-repository`，新仓库的项目名称叫`new-repository`。操作如下：
（1）创建旧仓库的裸克隆：
```bash
git clone --bare https://github.com/exampleuser/old-repository.git
```
执行上述命令后，会在本地生成一个名叫 `old-repository.git`的文件夹。
（2）迁移到新仓库：
```bash
cd old-repository.git
git push --mirror https://github.com/exampleuser/new-repository.git
```
这样的话，项目就已经迁移到新仓库了。
注意，我们**不需要**手动新建一个空的新仓库，当我们执行上述命令之后，新仓库就已经自动创建好了。
## 配置文件放哪了？每个仓库的Git配置文件都放在.gitconfig文件中：
- $ cat .gitconfig 
```
[core]
[remote "origin"]
    url = git@github.com:ShiHunYongZhe/learngit.git
    fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
    remote = origin
    merge = refs/heads/master
[alias]
    last = log -1
    co = checkout
    ci = commit
    br = branch
		st = status
		Lg=log	--color	--graph	--pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
[user]
    name = Your Name
    email = your@email.com
 ```
	 当你敲入命令
	git ci -m “描述文件”
	实际上Git执行的是：
	git commit -m “描述文件”
## Github Pages 搭建网站
### 网站名称https://用户名.github.io 
- 创建个人站点   ->  新建仓库（注：仓库名必须是【用户名.github.io】）
- 在仓库下新建index.html的文件即可
- 个人主页也可以设置主题
	1）进入项目主页，点击settings
	2）在settings页面，点击【Launch automatic page generator 】来自动生成主题页面
	3）新建站点基础信息设置
	4）选择主题
	5）生成网页
一些不常用的到时再自行查找
## git客户端推荐
sourceTree
原生的git GUI 和 git Base