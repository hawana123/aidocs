---
title: 2026-05-20 Release Note
tags: [changelog, release]
---

修复了以下页面崩溃问题：

1. **修复 CSS 嵌套语法错误** — `src/css/custom.css` 中使用了非标准的 CSS 嵌套语法（如 `&::before`），导致构建失败和页面崩溃。已改为标准 CSS 写法。
2. **修复 TOC 组件 style 属性错误** — `src/theme/TOC/index.js` 中 `<ins>` 标签的 `style` 属性使用了字符串而非对象格式，导致 React 运行时错误。
