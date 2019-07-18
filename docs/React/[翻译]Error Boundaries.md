# Error Boundaries（错误边界）

## 介绍

UI的某一部分抛错不应该导致整个App都崩掉，React 16由此提出一个新概念叫“error boundary”，错误边界

“error boundary”是什么呢，是一个React组件。error boundary能捕获子组件树中发生的任何错误，然后打日志，返回fallback UI。

error boundary能捕获哪儿的错误：

1. render里
2. 生命周期方法里的
3. 子组件树的constructor里的

error boundary不能捕获哪儿的错误：

1. 事件处理程序的错([learn more](https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers))
2. 异步代码的错 (e.g. `setTimeout` or `requestAnimationFrame` callbacks)
3. ssr的错
4. error boundary自个儿的错

如果一个组件定义了static getDerivedStateFromError（）或componentDidCatch（）或两个都有，那么这个组件就是一个error boundary。

static getDerivedStateFromError（）用于抛错后返回fallback UI，componentDidCatch（）用于打错误日志

下面举个例子

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```

然后就能把组件在ErrorBoundary里就可以了

```jsx
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

ErrorBoundary相当于组件的catch{}块。只要class型的组件能用ErrorBoundary，function型的不能用。

通常实践推荐在App里一处定义，处处使用

注意，ErrorBoundary只catch它子组件的错，它自个儿的错不catch。当然了，如果ErrorBoundary抛错了那它会传到它上面的ErrorBoundary去处理。

## 例子

Check out [this example of declaring and using an error boundary](https://codepen.io/gaearon/pen/wqvxGa?editors=0010) with [React 16](https://reactjs.org/blog/2017/09/26/react-v16.0.html).

## Error Boundaries放哪好呢？

随便，看你怎么写。包裹整个APP也成，包裹一个小组件也成

## 未捕获错误的新行为

这个变化意义重大。对于React 16来说，未被Error Boundaries捕获的错误会 **unmount** 整个react组件树

为啥这么做呢？React的人认为，宁可我给整个APP都挂掉也比返一个部分挂掉的UI强。比方说通信类app，一个挂掉的UI可能导致信息发错人；再比方说支付类APP，显示错误的账户余额还不如啥都不显示

多用Error Boundaries更带来更好的用户体验。Facebook Messenger 给sidebar，info panel，conversation log都各自包了一层ErrorBoundary，这样某个组件挂了不会影响其他的，而且能展示不同的fallback UI

推荐你用一些JS错误汇报工具

## 组件堆栈跟踪

![Error caught by Error Boundary component](https://reactjs.org/static/error-boundaries-stack-trace-f1276837b03821b43358d44c14072945-acf85.png)

Create React App默认配置的，如果没用要加 [this plugin](https://www.npmjs.com/package/babel-plugin-transform-react-jsx-source)到babel。

**开发环境使用，生产环境禁用！**

组件堆栈跟踪的组件名是调[`Function.name`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name) 得到的，低版本浏览器自己polyfill

## How About try/catch?

try/catch只适用于立即执行的代码

```jsx
try {
  showButton();
} catch (error) {
  // ...
}
```

但是react组件是声明式的，说明将要渲染什么，Error boundaries保留了react声明式的特点

blabalbla...

## 关于Event Handlers

Error boundaries **do not** catch errors inside event handlers！

渲染的时候不会处理事件的，所以事件处理程序抛错react会知道的。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    try {
      // Do something that could throw
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    if (this.state.error) {
      return <h1>Caught an error.</h1>
    }
    return <div onClick={this.handleClick}>Click Me</div>
  }
}
```

## 关于React 15的名称变化

unstable_handleError 改成了 componentDidCatch

这部分变化[codemod](https://github.com/reactjs/react-codemod#error-boundaries)可以帮你自动迁移代码



*built at: ‎2019‎年‎3‎月‎20‎日21:53:31*

*finished at: 2019年3月20日23:13:05*





