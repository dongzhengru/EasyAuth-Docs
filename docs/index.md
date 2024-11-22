---
layout: home

hero:
  name: "EasyAuth"
  text: "统一身份认证平台"
  tagline: Oauth2.0 | 统一认证 | 应用门户 | 单点登录 | 单点退出
  actions:
    - theme: brand
      text: 快速开始
      link: /introduction/quick-start
    - theme: alt
      text: 应用接入指南
      link: /client/application-integration
    - theme: alt
      text: Github
      link: https://github.com/dongzhengru/EasyAuth
  image:
      src: /easyauth-logo.png
      alt: EasyAuth

features:
  - icon: 📝
    title: 基于Oauth2.0
    details: EasyAuth采用Oauth2.0标准进行身份验证，提供安全、可靠的用户认证服务。开发者只需配置简单的参数，便可快速集成身份认证功能，简化权限管理。
  - icon: 🪶
    title: 轻量级
    details: EasyAuth是一个轻量级的Spring Boot项目，能够快速启动并且占用资源少。其设计使得开发者可以快速部署，并在必要时进行扩展，实现高效的开发流程。
  - icon: 🚀
    title: 高可用
    details: 该平台经过优化，支持高并发用户的访问，确保系统在各类负载下的稳定运行。EasyAuth支持分布式部署，能够为用户提供持续的身份认证服务，无缝应对流量变化。
  - icon: 🪄
    title: 低侵入
    details: EasyAuth以低侵入的方式设计，允许开发者以Maven的方式轻松集成到现有项目中。通过简洁的API接口与服务，开发者可以在不改变现有架构的情况下，使应用程序具备强大的身份认证能力。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(14px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(16px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.VPImage.image-src {
  width: 60%; /* 或者你希望的任何具体宽度 */
  max-width: 200px; /* 设置最大宽度，防止图像过大 */
  height: auto; /* 自动保持图像比例 */
}
</style>
