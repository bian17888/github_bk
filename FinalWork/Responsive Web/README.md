# Bootstrap 响应式站点实例

这个站点通过 bootstrap 实现了多终端的支持, 尤其在布局和图片效果上,都是一个很好的教科书般的实例.

**知识点**

- 多终端响应式布局
- bootstrap web 组件
	- carousel
	- scrollspy
- 新 feature 效果
	- 动画 ([wow.js](http://mynameismatthieu.com/WOW/))
	- 背景
		- 背景滚动 fixed 模式
		- 视差动画 ([stellar.js](https://github.com/markdalgleish/stellar.js))
		- 背景图片视频 ([formstone -> background模块](https://formstone.it/components/background/))
	- 图片预览插件 ([nanogallery](http://nanogallery.brisbois.fr/))


## 多终端响应式布局

了解 4种 Responsive patterns 方法 : [Multi-Device Layout Patterns](http://www.lukew.com/ff/entry.asp?1514)

理解 bootstrap 中的 *Visual BreakPoints*

遵守 *移动优先* 的原则, 使用 `<meta>`, `col-md-push-2 `, `hidden-md`

学习文章, 并实现 [Bootstrap 3 responsive columns of same height](http://www.minimit.com/articles/solutions-tutorials/bootstrap-3-responsive-columns-of-same-height)

## bootstrap web 组件

carousel 实现轮转效果

scrollspy 实现导航与内容联动, 结合 jquery.easing增强动画效果, 优化 scroll 滚动停止事件

## 新 feature 效果

主要尝试了一些新特性, 例如 `背景滚动 fixed 模式` , `视差动画` 等