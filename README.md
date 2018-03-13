# mmall-fe

### 架构设计及技术选型
1. 分层架构：分为逻辑层，数据层，工具层
2. 模块化：使用CommonJs
3. 开发过程选择：敏捷开发
4. 前后端分离方式：完全分离
5. 框架选型：jQuery
6. 构建工具：webpack
7. 版本控制工具：git

### 开发环境
1. 安装node.js
2. 安装git
3. sublime
4. 安装charles
5. 初始化npm
6. 安装及初始化webpack
7. webpack对脚本和样式的处理
8. webpack对html模板的处理
9. webpack对图片和字体文件的处理
10. webpack-dev-server的使用

### 项目通用模块开发
1. 通用js工具的封装
 * 网络请求工具
 * URL路径工具
 * 模板渲染工具：hogan
 * 字段验证和通用提示
 * 统一跳转
2. 通用布局
 * 定宽布局
 * 通用布局的抽离
 * icon-font的引入
 * 通用样式的定义
 
 ### 用户模块的开发
 1. 用户登录
  * post请求方式
  * 接口字段的验证
  * 表单提交
 2. 用户注册
  * 接口字段的验证和提交提交
  * 用户名的异步验证
 3. 密码找回
  * 利用jQuery实现一个单页应用，把找回密码的三个步骤放在一个页面实现
 4. 个人中心
  * 用户信息的展示
  * 用户信息的修改
  * 利用动态事件的渲染方式和事件委托
 5. 修改密码
  * 对字段的验证和表单提交
  
  ### 商品模块开发
  1. 首页
   * 左侧关键字导航页面开发
   * 活动展示轮播图
   * 分楼层的商品分类信息
  2. 商品列表页
   * 商品列表的展示
   * 排序的逻辑
   * 分页的处理
  3. 商品详情页
   * 商品信息的展示
   * 缩略图预览
   * 添加购物车
 
 ### 购物车模块开发
 1. 购物车中商品的展示
 2. 修改购物车中商品的数量
 3. 选中/取消选中购物车中的商品
 4. 全选/取消全选购物车中的商品
 5. 删除单个/多个购物车商品
 6. 购物车结算
 
 ### 订单模块的开发
 1. 订单确认页
  * 地址管理（增删改查）
  * 订单商品信息的展示
  * 订单的提交
 2. 订单列表页
  * 订单列表的展示
  * 分页
 3. 订单详情页
  * 订单详情的展示
  * 未支付的订单可以继续支付
  
### 支付模块的开发
 支付宝支付--notify_url方式
 
### 线上环境适配和项目自动化发布
1. 线上环境适配
 * 域名分离
 * html路径的简化
 * dns-prefetch的添加
2. SEO优化
3. 生产环境配置
 * 购买服务器
 * 安装NodeJs，webpack，ruby&sass，git
4. 自动化发布脚步的编写
 * 拉取最新代码
 * 项目初始化
 * 执行打包编译生成dist文件
 * 复制dist目录到目标目录
5. ngix和域名配置
 * ngix域名配置
 * 域名解析
6. 访问数据统计和线上存活监控
