# HOC

## 什么是HOC

**HOC不是组件，而是一个函数。**HOC是接受一个WrappedComponent，然后return一个EnhancedComponent的函数。

```jsx
function logProps(WrappedComponent) {
  return class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log('Current props: ', this.props);
      console.log('Next props: ', nextProps);
    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <WrappedComponent {...this.props} />;
    }
  }
}
```

这个logProps函数我们称之为HOC，但它不是组件。

建议：

1. What HOC returned has a similar (literally, same) interface to WrappedComponent, so pass all props it received to its child
2. 

## HOC vs container components

### container components

参考：https://medium.com/@learnreact/container-components-c0e67432e005

#### philosophy

container component有一个与之对应的component，比如：

```
StockWidgetContainer => StockWidget
TagCloudContainer => TagCloud
PartyPooperListContainer => PartyPooperList
```

然后fetch data 的逻辑放在container component里，与之对应的component负责渲染。

#### 什么是container components模式

假如没有用container components模式，我们要展示一些comments，可能会这么做：

```jsx
class CommentList extends React.Component {
  this.state = { comments: [] };

  componentDidMount() {
    fetchSomeComments(comments =>
      this.setState({ comments: comments }));
  }
  render() {
    return (
      <ul>
        {this.state.comments.map(c => (
          <li>{c.body}—{c.author}</li>
        ))}
      </ul>
    );
  }
}
```

组件维护一个自己的state.comments，mounted之后fetch数据，更新state，然后render。这里我们的组件实际上有2个职责：fetch数据、渲染数据。

现在我们把这两个职责分开来做

```jsx
class CommentListContainer extends React.Component {
  state = { comments: [] };
  componentDidMount() {
    fetchSomeComments(comments =>
      this.setState({ comments: comments }));
  }
  render() {
    return <CommentList comments={this.state.comments} />;
  }
}
```

```jsx
const CommentList = props =>
  <ul>
    {props.comments.map(c => (
      <li>{c.body}—{c.author}</li>
    ))}
  </ul>
```

#### 优点

1. 关注点分离
2. 单一职责

#### 适用场景

anywhere，我们可以把所有需要render的东西都写成一个组件，这个组件就是负责静态渲染。

### HOC vs container components

container components 是HOC的一种具体体现。或者认为HOC是一种参数化了的container components。

*PS: 不太理解，以后再说*