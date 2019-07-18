# Refs and the DOM

Refs提供了访问在render函数中创建的DOM节点和React元素的方法。

我们在写render函数的时候，return的东西无非是2种：

1. DOM节点
2. React元素

一般情况，或者说正常的react数据流下，我们修改子组件的方式只有一种：父组件传props给子组件，然后子组件拿到新的props重新渲染。但是有些情况下你需要立即和子组件交互

