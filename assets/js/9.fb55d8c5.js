(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{189:function(t,a,n){t.exports=n.p+"assets/img/1546912378510.1a8746f6.png"},218:function(t,a,n){"use strict";n.r(a);var s=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"安装和使用mongodb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装和使用mongodb","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装和使用mongodb")]),t._v(" "),s("p",[t._v("现在MongoDB已经发布了4.0版本，但是由于上一个项目使用的是3.0版本的mongodb，所以考虑还是以3.0的为主")]),t._v(" "),s("h2",{attrs:{id:"一、下载mongodb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、下载mongodb","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、下载MongoDB")]),t._v(" "),s("p",[t._v("官网下载安装")]),t._v(" "),s("h2",{attrs:{id:"二、配置mongodb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、配置mongodb","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、配置MongoDB")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("在c:\\MongoDB（可随意起）下面建一个data文件夹 c:\\MongoDB\\data")])]),t._v(" "),s("li",[s("p",[t._v("在c:\\MongoDB（可随意起）下面建一个logs文件夹 c:\\MongoDB\\logs ，在里面建一个文件mongo.log")])]),t._v(" "),s("li",[s("p",[t._v("在c:\\MongoDB（可随意起）下面建一个etc(随意起，放配置文件)文件夹 c:\\MongoDB\\etc ,在里面建一个文件mongo.conf")])]),t._v(" "),s("li",[s("p",[t._v("打开mongo.conf文件，修改如下：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#数据库路径")]),t._v("\ndbpath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c:\\MongoDB\\data\\\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#日志输出文件路径")]),t._v("\nlogpath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c:\\MongoDB\\logs\\mongodb.log\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件")]),t._v("\nlogappend"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启用日志文件，默认启用")]),t._v("\njournal"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false")]),t._v("\nquiet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#端口号 默认为27017")]),t._v("\nport"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("27017\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指定存储引擎（默认先不加此引擎，如果报错了，大家在加进去）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#storageEngine=mmapv1")]),t._v("\n\nhttpinterface"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])])])]),t._v(" "),s("li",[s("p",[t._v("配置环境变量")])]),t._v(" "),s("li",[s("p",[t._v("设置windows服务，首先进入命令行")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mongod --config c:\\MongoDB\\etc\\mongo.conf --install --serviceName "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MongoDB"')]),t._v("\n")])])]),s("p",[t._v("然后打开windows服务，点击启动，启动mongoDB")]),t._v(" "),s("p",[s("img",{attrs:{src:n(189),alt:"1546912378510"}})])])])])}],o=n(0),e=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);a.default=e.exports}}]);