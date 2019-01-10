## to-do 进阶
理解UI更新条件！
组件的state或者props改变！

### 最原始
* 组件自己管理数据和逻辑
* 手动setState修改组件内部状态更新UI


### 使用store
* 数据管理放在store,组件内引入全局store
* 逻辑操作在组件内定义方法，调用store派发action, 更新store的数据
* 订阅store的改变同步更新到组件state，store.subscribe(this.handleStoreChange)，函数体this.setState(store.getState())

缺点：组件内部要处理逻辑，显式引入store,和订阅store状态变更的回调更新组件内部state再重新render显得不优雅

### react-redux 引入容器组件
* 组件定义为UI组件，不处理逻辑
* 不显式引入store，使用react-redux的connect方法，将store中的state和派发action的相关逻辑注入到UI组件中，组件内部通过this.props获取这些数据和方法，
最后被包装成容器组件，对外暴露。
* store数据改变，导致props改变，所以组件刷新
* 依赖注入的设计思想

优点：UI和逻辑分离