# 王飞教授课题组网站

**水合物低碳能源研究团队 · 中国石油大学（华东）**

## 课题组简介

王飞教授课题组隶属于中国石油大学（华东），专注于气体水合物相平衡、低碳能源技术、新能源材料等前沿领域的研究与创新。

## 研究方向

1. **气体水合物相平衡** - 研究不同条件下气体水合物的形成、稳定性和分解机理
2. **低碳能源技术** - 开发二氧化碳捕集、利用与封存（CCUS）技术
3. **新能源材料** - 设计合成高性能能源材料
4. **计算模拟与人工智能** - 利用分子模拟、机器学习等方法预测材料性能

## 网站特性

- **响应式设计** - 适配桌面、平板、手机等各种设备，移动端汉堡菜单
- **暗色模式** - 支持亮色/暗色主题切换，自动识别系统偏好
- **中英双语** - 一键切换中英文界面
- **SEO 优化** - 完整的 meta 标签、Open Graph、JSON-LD 结构化数据
- **无障碍访问** - ARIA 标签、跳转链接、键盘导航、焦点样式
- **滚动动画** - 基于 IntersectionObserver 的渐入动画效果
- **返回顶部** - 滚动超过一定距离后显示返回顶部按钮
- **打印优化** - 打印时自动隐藏导航等非必要元素
- **减弱动效** - 尊重 `prefers-reduced-motion` 系统设置

## 项目结构

```
wangfei-lab/
├── index.html          # 主页
├── 404.html            # 404 错误页面
├── CNAME               # 自定义域名配置
├── README.md           # 项目说明
├── css/
│   └── style.css       # 外部样式表
└── js/
    └── main.js         # 交互脚本
```

## 技术栈

- **HTML5** - 语义化标签（`<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`）
- **CSS3** - CSS 自定义属性、Grid 布局、Flexbox、渐变、过渡动画
- **JavaScript (ES5+)** - IntersectionObserver、LocalStorage、事件委托
- **Google Fonts** - Noto Sans SC 中文字体

## 部署说明

本网站部署在 GitHub Pages，可通过以下地址访问：

- GitHub Pages：https://chen125111.github.io/wangfei-lab/
- 自定义域名：https://wangfei-lab.upc.edu.cn/

## 更新说明

如需更新网站内容，请修改对应文件并提交到 GitHub 仓库：

1. **修改内容** - 编辑 `index.html` 中对应的 section
2. **修改样式** - 编辑 `css/style.css`
3. **修改交互** - 编辑 `js/main.js`
4. **添加双语** - 在 HTML 元素上添加 `data-zh` 和 `data-en` 属性
