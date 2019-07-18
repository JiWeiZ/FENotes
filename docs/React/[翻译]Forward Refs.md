# Forwarding Refs（引用转发）

Forwarding Refs能把ref传给子组件。通常用的不多，但是写组件库的话可能会经常用到。下面是几个常见的应用场景

## Forwarding refs to DOM components

比如考虑这么一个返回原生按钮的组件

```jsx
function FancyButton(props) {
  return (
    <button className="FancyButton">
      {props.children}
    </button>
  );
}
```

这个FancyButton是一个react组件，一般来说使用组件是不需要去获取内部dom的，而且这种操作也破坏了组件的封装性。这种封装对于一些应用级的组件来说比如FeedStory或者Comment这种组件是很有必要的，但是对于**经常复用的叶子组件，类似FancyButton或者MyTextInput**之类的组件，我们希望像使用普通DOM一样使用他们，所以不可避免的要使用一些DOM原生操作，比如处理focus，selection，animation之类的操作。

forward refs可以让组件接收一个refs，然后在传给它的下级组件。

有了forward refs我们就可以让FancyButton接收一个refs，然后传给它内部的DOM

```jsx
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">{props.children}</button>
))
// 然后我们就可以获取一个DOM button的引用
const ref = React.createRef()
<FancyButton ref={ref}>Click Me!</FancyButton>
```



