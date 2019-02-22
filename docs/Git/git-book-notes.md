## git add

git add的作用：

1. 开始跟踪新文件（U → A）
2. 一个文件初始的状态是（U，untracked）
3. git add以后是（A，added）
4. 然后修改了A状态的文件，会变成（M，modified）状态
5. 对已修改的文件必须使用git add才能将最新改动后的结果放到暂存区，换句话说必须用add一下M状态的才能变成A状态。
6. 使用git commit只会把A状态的文件提交

## git status

### git status -s 状态说明：

```bash
MM: add以后又修改了，修改了还没来得及第二次add
 M: 修改了，还没add
M : 修改了也add了
A : 刚刚add，没修改过
AM: 刚刚add，修改过了还没来得及第二次add
??: 未跟踪的
```



## .gitignore规则

1. *匹配0个或多个任意字符
2. [abc]匹配a，b，或c（要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）
3. 问号（`?`）只匹配一个任意字符
4. `[0-9]` 表示匹配所有 0 到 9 的数字
5. 

```bash
# 注释以#号开头

# 忽略所有的xxx.a文件
*.a 

# 
```



## git diff

1. 改了啥还没add？ 
2. add啥了都？下次commit会提交啥？



## 2.3 查看提交历史

1. git log

2. git log -p -2 查看最近2次提交的内容差异

3. git log --stat 修改历史简报

4. git log --pretty=oneline

5. git log --pretty=format:"%h - %an, %ar : %s"

6. git log 常用选项

   | 选项              | 说明                                                         |
   | ----------------- | ------------------------------------------------------------ |
   | `-p`              | 按补丁格式显示每个更新之间的差异。                           |
   | `--stat`          | 显示每次更新的文件修改统计信息。                             |
   | `--shortstat`     | 只显示 --stat 中最后的行数修改添加移除统计。                 |
   | `--name-only`     | 仅在提交信息后显示已修改的文件清单。                         |
   | `--name-status`   | 显示新增、修改、删除的文件清单。                             |
   | `--abbrev-commit` | 仅显示 SHA-1 的前几个字符，而非所有的 40 个字符。            |
   | `--relative-date` | 使用较短的相对时间显示（比如，“2 weeks ago”）。              |
   | `--graph`         | 显示 ASCII 图形表示的分支合并历史。                          |
   | `--pretty`        | 使用其他格式显示历史提交信息。可用的选项包括 oneline，short，full，fuller 和 format（后跟指定格式）。 |



## 2.6 标签

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

