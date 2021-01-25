### vue3.0 六大亮点
- 性能比 Vue2.0 块1.2 到 2倍
- 按需编译，体积比Vue2.x 更小
- 组合API setup() 解决vue2中页面数据和逻辑分离的问题
- 更好的ts支持
- 暴露了自定义渲染API
- 更先进的组件
### Vue3.0 是如何变快的？
- diff 方法优化
  + Vue2 中的虚拟dom是进行全量的对比
    treeDiff,componentDiff,elementDiff，层层比较
  + Vue3 新增了静态标记 - PatchFlag
    在与上次虚拟节点进行对比的时候，只对比带有patch flag 的节点
    并且可以通过flag的信息得知当前节点要对比的具体内容
- hoistStatic 静态提升
  + Vue2中无论元素是否参与更新，每次都会重新创建
  + Vue3中对于不参与更新的元素，只会被创建一次，之后会在每次渲染的时候被不停的复用
- cacheHandlers 事件侦听器缓存
  + 默认情况下 onclick会被视为动态属性绑定，所以每次都会去追踪它的变化
  但是因为是同一个函数，所以没有追踪变化，直接缓存起来复用即可
  + 注意点：Vue3 的diff算法中，只有有静态标记的才会进行比较，才会进行追踪
- ssr 渲染
  + 当有大量静态内容的时候，这些内容会被当做纯字符串推进一个buffer里面，
    即使存在动态的绑定，会通过模板插值嵌入进去，这样会比通过虚拟dom来渲染的快上很多
  + 当静态内容大到一定量级的时候，会用_createStaticVNode 方法在客户端去生成一个 static node，这些静态node，会被直接innerHTML,就不需要创建对象，然后根据对象渲染。
### 创建vue
- Vue-cli
- webpack
- vite
### 什么是Vite？
- vite 是vue 作者开发的一款意图取代webpack的工具
- 其实现原理是利用ES6 的import会发送请求去加载文件的特性，
  拦截这些请求，做一些预编译，省去webpack 冗长的打包时间
- 安装 vite
    npm install -g create-vite-app
- 利用vite 创建vue3项目
    create-vite-app projectName
    cd projectName
    npm install
    npm run dev
