# Git基础

## Lesson 1 本地操作

1. git init：初始化仓库

2. git add：添加文件到暂存区<br/>
   ![1550667459189](../.vuepress/public/assets/KwOLu.jpg)

3. git commit：提交文件到版本库

   1. 直接git commit会打开编辑器编辑
   2. git commit -m "add comment here"：单行注释
   3. git commit -a -m "add something new"：跳过add直接提交
   4. git commit --amend：改写提交，用于提交后修改注释或增补遗忘提交的文件

4. git status：查看状态

5. git status -s：状态简览

   ```bash
   $ git status -s
    M README                # 修改了还没添加
   MM Rakefile							 # 修改了添加了又修改了
   AM index.txt             # 刚刚添加，然后又修改了
   A  lib/git.rb            # 刚刚添加，之后没改过
   M  lib/simplegit.rb      # 修改了又添加了
   ?? LICENSE.txt           # 未跟踪的
   ```

6. git rm --cached  \<file\>：从暂存区移除，A状态或M状态的文件置位U状态

7. git checkout -- \<file\>：把暂存区文件拉到工作区

   1. 丢弃工作区修改，如刚刚修改或删除一个文件（还没add），想撤销操作，怎么办？

      ```bash
      $ git checkout -- <file>
      ```

8. git reset HEAD \<file\>：把版本库文件拉到暂存区

   1. 丢弃工作区修改，如刚刚修改或删除一个文件，然后又add了，想撤销操作，怎么办？

      ```bash
      $ git reset HEAD <file>
      $ git checkout -- <file>
      ```

9. git reset --hard HEAD^：退回上一个版本

10. git reset --hard e475afc：退回哈希为e475afc的版本

11. git diff：

    ```bash
    $ git diff              # 对比工作区(未 git add)和暂存区(git add 之后)
    $ git diff --cached     # 对比暂存区和版本库
    $ git diff HEAD         # 对比工作区和版本库
    ```

12. git rm \<file\>：删除文件并add

    1. git rm -f \<file\>：强制删除M状态的文件

13. git mv file_from file_to：给文件改名

14. .gitigonre文件

    ```bash
    # "#"号后面是注释

    # 忽略.a文件
    *.a

    # 但是不忽略lib.a
    !lib.a

    # 仅忽略当前目录下的TODO文件，子目录下的不忽略
    /TODO

    # 忽略build目录下的所有文件
    build/

    # 忽略doc目录下的txt文件，但是doc子目录下的txt不忽略
    doc/*.txt

    # 忽略doc及其子目录下的txt
    doc/**/*.txt
    ```


## Lesson 2 查看提交历史

1. git log：查看历史

2. git reflog：查看命令历史

3. git log -p -n：显示n条记录，同时显示diff

4. git log --oneline：单行显示

5. git log --pretty=format:"..."：定制化输出格式

   1. 举例：<br/>

      ```bash
      $ git log --pretty=format:"%h - %an, %ar : %s"
      ca82a6d - Scott Chacon, 6 years ago : changed the version number
      085bb3b - Scott Chacon, 6 years ago : removed unnecessary test
      a11bef0 - Scott Chacon, 6 years ago : first commit
      ```

   2.  `git log --pretty=format` 常用选项

   | 选项  | 说明                                        |
   | ----- | ------------------------------------------- |
   | `%H`  | 提交对象（commit）的完整哈希字串            |
   | `%h`  | 提交对象的简短哈希字串                      |
   | `%T`  | 树对象（tree）的完整哈希字串                |
   | `%t`  | 树对象的简短哈希字串                        |
   | `%P`  | 父对象（parent）的完整哈希字串              |
   | `%p`  | 父对象的简短哈希字串                        |
   | `%an` | 作者（author）的名字                        |
   | `%ae` | 作者的电子邮件地址                          |
   | `%ad` | 作者修订日期（可以用 --date= 选项定制格式） |
   | `%ar` | 作者修订日期，按多久以前的方式显示          |
   | `%cn` | 提交者（committer）的名字                   |
   | `%ce` | 提交者的电子邮件地址                        |
   | `%cd` | 提交日期                                    |
   | `%cr` | 提交日期，按多久以前的方式显示              |
   | `%s`  | 提交说明                                    |

6. git log --graph：显示分支合并历史

7. git log --stat：简略统计信息

8. git log --shortstat：只显示--stat最后一行信息

## Lesson 3 打标签

1. 附注标签：git tag -a v1.4 -m "add comment here"

2. 轻量标签：git tag v1.4-lw

3. 后期打标签：git tag -a v1.2 9fceb02

4. 推送一个标签：git push origin v1.5

5. 推送标签：git push --tags

6. 删除标签：

   1. 删除本地标签：git tag -d v1.5
   2. 删除本地标签后更新远程库：git push origin :refs/tags/v1.4-lw

7. git show：查看标签及提交信息

   1. 附注标签：

      ```console
      $ git show v1.4
      tag v1.4
      Tagger: Ben Straub <ben@straub.cc>
      Date:   Sat May 3 20:19:12 2014 -0700
      
      my version 1.4
      
      commit ca82a6dff817ec66f44342007202690a93763949
      Author: Scott Chacon <schacon@gee-mail.com>
      Date:   Mon Mar 17 21:52:11 2008 -0700
      
          changed the version number
      ```

   2. 轻量标签：

      ```console
      $ git show v1.4-lw
      commit ca82a6dff817ec66f44342007202690a93763949
      Author: Scott Chacon <schacon@gee-mail.com>
      Date:   Mon Mar 17 21:52:11 2008 -0700
      
          changed the version number
      ```

## Lesson 4-1 分支（不涉及远程分支）

1. git checkout -b test：创建并跳转到test分支
2. git checkout -b test f9b82bd：基于f9b82bd版本创建并跳转到test分支
3. git checkout -b test origin/master：基于远程master分支创建并跳转到test分支
4. git branch test：创建分支test
5. git checkout test：跳转到分支test
6. git merge test：合并test分支
7. git branch -d test：删除test分支
8. git branch -v：查看每一个分支的最后一次提交
9. git branch -vv：可以查看远程分支相关信息
10. git branch --merged：查看已经merge的分支
11. git branch --no-merged：查看未merge的分支

## Lesson 4-2 分支（远程分支）

1. git clone <远程仓库地址> 本地项目名字：克隆远程仓库
2. git remote add \<shortname\> \<url\>：添加远程仓库
3. git remote：显示远程库信息
4. git remote -v：显示远程库地址
5. git fetch (remote)：抓取
6. git merge：合并
7. git push (remote) (branch)：推送到某个远程库的某个分支
8. git push origin local-sf:sf：将本地的local-sf分支推送到远程sf分支
9. git merge origin/serverfix：将远程库serverfix分支merge到当前分支
10. git checkout -b sf origin/serverfix：基于远程serverfix分支新建本地sf分支
11. git checkout --track origin/serverfix：基于远程serverfix分支新建本地serverfix分支（上面的简写）
12. git checkout serverfix：如果远程库有叫serverfix的分支，而本地库没有的话，会直接基于远程serverfix分支新建本地serverfix分支
13. git branch -u origin/serverfix：设置当前分支跟踪远程分支serverfix
14. git push origin --delete serverfix：删除远程serverfix分支

## Lesson 5 变基

1. git rebase master：将当前分支在master分支上重放
2. git rebase --onto master server client：找出处于 `client` 分支和 `server` 分支的共同祖先之后的修改，然后把它们在 `master` 分支上重放

### 解释 1

![ååçæäº¤åå²ã](https://git-scm.com/book/en/v2/images/basic-rebase-1.png)

切到experiment分支，变基，再切回master分支，快进合并

```bash
git checkout experiment
git rebase master
git checkout master
git merge experiment
```

![å° `C4` ä¸­çä¿®æ¹ååºå° `C3` ä¸ã](https://git-scm.com/book/en/v2/images/basic-rebase-3.png)



![master åæ¯çå¿"è¿åå¹¶ã](https://git-scm.com/book/en/v2/images/basic-rebase-4.png)

这样提交历史是串行的，比较好看

### 解释 2

比方说现在git线是这样的：

![从一个特性分支里再分出一个特性分支的提交历史。](https://git-scm.com/book/en/v2/images/interesting-rebase-1.png)

希望将 `client` 中的修改合并到主分支并发布，但暂时并不想合并 `server` 中的修改，可以这么做：

```bash
git rebase --onto master server client
```

意思是：找出处于 `client` 分支和 `server` 分支的共同祖先之后的修改，然后把它们在 `master` 分支上重放

![截取特性分支上的另一个特性分支，然后变基到其他分支。](https://git-scm.com/book/en/v2/images/interesting-rebase-2.png)

## Lesson 6 

John 、Jessica和 Josie 都是底层苦逼码农。 John 与 Jessica 在一个特性上工作，同时 Jessica 与 Josie 在第二个特性上工作。



