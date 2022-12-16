# 如何共建

感谢您对本项目的贡献感兴趣！

## 开发

### 前置工作

克隆仓库到本地并且安装依赖

```bash
pnpm install
```

我们使用VitePress进行快速开发和记录。您可以通过以下方式在本地启动

```bash
pnpm dev
```

## 共建

### 现有方法

请随意增强现有功能。请尽量不要引入破坏性的改变。

### 新方法

有一些添加新功能的注意事项

- 在开始工作之前，最好先打开一个问题进行讨论。
- 实现应作为文件夹放置在`packages/core`下，并在`index.ts`中公开`
- 在`核心`包中，尽量不要引入第三方依赖关系，因为这个包的目标是尽可能地轻量级。
- 如果您想引入第三方依赖关系，请创建新的插件。
- 您可以在`packages/core/template/`下找到函数模板，详细信息请参见[模版文件夹](#模版文件夹)部分。
- 为函数编写文档时，`<--FOOTER_STARTS-->`和`<--FOOTER_ENDS-->`将在构建时自动更新，因此不需要更新它们。

> 请注意，您不需要更新包`index.ts`。它们是自动生成的。

### 新的插件

非常欢迎新的附加组件！

- 在`packages/`下创建一个新文件夹，并将其命名为npm包名称。
- 在`meta/packages.ts`中添加加载项详细信息
- 创建`README.md`在该文件夹下。
- 向核心包添加函数。
- 提交并作为PR提交。

## 项目结构

### Monorepo

我们使用monorepo管理包

```
packages
  shared/         - 跨包共享utils
  core/           - 核心包
  [...addons]/    - 附加包
```

### 模版文件夹

模版文件夹通常包含以下4个文件：

> 您可以在`packages/core/template/`下找到模板

```bash
index.ts            # 函数源代码本身
demo.mpx            # 例子
index.test.ts       # vitest单元测试
index.md            # 文档
```

在`index.ts`您应该导出带有名称的函数

```ts
// DO
export { useMyFunction }

// DON'T
export default useMyFunction
```

在`index.md`第一句话将在函数列表中显示为简短的介绍，因此请尽量保持简短明了。

```md
# useMyFunction

这将是介绍。详细说明...

```

阅读有关[参考指南](https://mpxuse.cn/guidelines).

## 代码风格

只要安装了开发依赖项，就不用担心代码样式。Git钩子将在提交时为您格式化并修复它们。

## 感谢

再次感谢您对这个项目感兴趣！你真棒！
