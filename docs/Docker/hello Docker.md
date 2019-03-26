# 初识Docker

先安装，来个hello world

```bash
C:\Users\zhaojiwei>docker run ubuntu:15.10 /bin/echo "Hello world"
Unable to find image 'ubuntu:15.10' locally
15.10: Pulling from library/ubuntu
7dcf5a444392: Pull complete
759aa75f3cee: Pull complete
3fa871dc8a2b: Pull complete
224c42ae46e7: Pull complete
Digest: sha256:02521a2d079595241c6793b2044f02eecf294034f31d6e235ac4b2b54ffc41f3
Status: Downloaded newer image for ubuntu:15.10
Hello world
```

## docker核心概念

要理解docker，最核心的是理解三个概念，分别是：仓库（Registry）、镜像（image）和容器（Container）。

所谓仓库，其实是个镜像仓库，里面有很多别人已经打包好的镜像，可以直接使用`docker pull`命令将仓库中的镜像拉到本地，默认的仓库Docker的官方仓库[Docker Hub Registry](https://hub.docker.com/)。

在bash中运行，cmd运行有时会报错（因为安装的是时候选了Linux风格）

```bash
# 去仓库中搜索含有tutorial关键字的镜像
docker search tutorial

# docker pull命令从仓库中拉取镜像到本地
docker pull learn/tutorial

# 看到本地已有的镜像
docker images

# 删除镜像
docker rmi 镜像id

# 删除所有镜像
docker rmi $(docker images -q)

# 停止所有容器
docker stop $(docker ps -aq)
# 删除所有容器
docker rm $(docker ps -aq)

```

运行镜像之后就会生成一个容器

```bash
$ docker run learn/tutorial apt-get install -y ping
```

这个命令会在docker容器中执行"apt-get install -y ping"，也就是安装一个[ping命令](https://www.baidu.com/s?wd=ping%E5%91%BD%E4%BB%A4&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)，运行完之后容器就自动退出了。

```bash
# 查看所有当前正在运行的容器
docker ps

# 查看到所有容器
docker ps -a
```

现在试着ping一下

```bash
$ docker run learn/tutorial ping www.baidu.com
C:\Program Files\Docker\Docker\Resources\bin\docker.exe: Error response from daemon: OCI runtime create failed: container_linux.go:344: starting container process caused "exec: \"ping\": executable file not found in $PATH": unknown.
```

为啥说找不到ping呢？明明安装了呀，这是因为在容器中的修改并不会影响镜像，通过`docker commit`命令可以将这个容器提交成一个新的镜像。

```bash
zhaojiwei@HIH-D-17576 MINGW64 /e
$ docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS                          PORTS               NAMES9cbb57970c80        learn/tutorial      "apt-get install -y …"   About a minute ago   Exited (0) About a minute ago                       modest_diffie

zhaojiwei@HIH-D-17576 MINGW64 /e
$ docker commit 9cbb57970c80 new-ping
sha256:a44afc3aae198f109629120f0b689067cc382b7d24b0f99cfc26f840a8657423

zhaojiwei@HIH-D-17576 MINGW64 /e
$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
new-ping            latest              a44afc3aae19        12 seconds ago      140MB
learn/tutorial      latest              a7876479f1aa        5 years ago         128MB

$ docker run new-ping ping www.baidu.com
PING www.a.shifen.com (115.239.211.112) 56(84) bytes of data.
64 bytes from 115.239.211.112: icmp_req=1 ttl=37 time=3.62 ms
64 bytes from 115.239.211.112: icmp_req=2 ttl=37 time=6.15 ms
...
```

可见ping命令可以使用了。在上面这个现象的背后，容器其实只是在镜像上面添加一个可写层，每当对这个容器进行修改都会在可写层标明与原本镜像的不同之处，当你使用docker commit命令时，只是提交了一个可写层，将它变成一个不可写的镜像层，而这个新的镜像和原本的镜像共享原本镜像的所有层，这就是所谓的docker分层机制，其实每个docker镜像都是由好多层构成的，这个机制能极大地缩小镜像占用的硬盘空间，如下图

![dockeråå±æºå¶](https://img-blog.csdnimg.cn/20190222195112903.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzMjU2Njg4,size_16,color_FFFFFF,t_70)



创建一个镜像

```bash
docker build -t xml2img:latest .
```



启动一个镜像

```
docker run -p 7003:7003 xml2img
```

