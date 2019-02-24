const fs = require('fs')
const path = require('path')
const docs = path.resolve('.', 'docs')

// 配置sidebar
var sidebar = {}
var docsContent = fs.readdirSync(docs)
var vuepressIdx = docsContent.indexOf('.vuepress')
docsContent = docsContent
  .slice(0, vuepressIdx).concat(docsContent.slice(vuepressIdx + 1))
  .filter(e => {
    var statsWithinDocs = fs.statSync(path.resolve(docs, e))
    return statsWithinDocs.isDirectory()
  })
for (var dir of docsContent) {
  var dirPath = path.resolve(docs, dir)
  var dirContent = fs.readdirSync(dirPath)
  // 没有README.md就创建一个README.md
  var README = 'README.md'
  if (dirContent.indexOf(README) === -1) {
    fs.writeFileSync(path.resolve(dirPath, 'README.md'), `# ${dir}\n${dir}`,'utf8')
  }
  // 去除.md后缀名
  dirContent = dirContent
    .filter(e => e.endsWith('.md') && e !== 'README.md')
    .map(e => e.slice(0, -3))
  sidebar[`/${dir}/`] = dirContent
}

module.exports = {
  base: '/FENotes/',
  dest: 'dist',
  title: '前端知识小记',
  description: 'Personal Front End Knowledge Notes',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/logo.png` }],
    ['meta', { name: 'msapplication-TileImage', content: '/logo.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: false,
  themeConfig: {
    repo: 'JiWeiZ/FENotes',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      { text: 'JS', link: '/JS/' },
      {
        text: 'CSS',
        items: [
          { text: 'CSS', link: '/CSS/' },
          { text: 'SASS', link: '/SASS/' },
        ]
      },
      { text: 'Node', link: '/Node/' },
      { text: 'Webpack', link: '/Webpack/' },
      {
        text: '通识',
        items: [
          { text: '网络', link: '/Network/' },
          { text: '算法', link: '/Algorithm/' },
          { text: '数据结构', link: '/Data-Structrue/' },
        ]
      },
      {
        text: '框架',
        items: [
          { text: 'Vue', link: '/Vue/' },
          { text: 'React', link: '/React/' },
          { text: 'Express', link: '/Express/' },
          { text: 'Koa', link: '/Koa/' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: 'Git', link: '/Git/' },
          { text: 'LeetCode', link: '/LeetCode/' },
          { text: '面经', link: '/Interview/' },
          { text: '关于', link: '/About/' },
        ]
      }
    ],
    sidebar,
    sidebarDepth: 2
  }
}
