## vue-route案例步骤思路

**1.复制纯净html结构**

**2.创建APP组件、路由**

- 引入Vue和Vue-route
- new一个vue实例
- 创建一个路由构造函数
- 模板
- 创建App路由
- 在Vue实例里关联路由

**3**.**将左侧链接改为路由链接**

- APP模板中插入routerLinkTo模板
- 嵌套子路由

**4.创建左侧菜单对应的路由组件**

- const Users .....
- .....

**5.user栏中渲染用户列表**

- 模板中创建一个表格
- 创建一个data数据
- 把data中的数据循环渲染进表格中

**6.创建用户详情页面**

- const userinfo
- 创建props链接userlist中的id
- uoserinfo/:id

**7.创建点击交互**

- 点击表格最后的详情进入用户详情页
- 点击用户详情页的后退返回user页面

