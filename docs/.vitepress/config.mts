import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "EasyAuth",
  description: "统一身份认证平台",
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/introduction/quick-start' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '什么是EasyAuth？', link: '/introduction/what-is-easyauth' },
          { text: '快速开始', link: '/introduction/quick-start' }
        ]
      },
      {
        text: '开放接口',
        items: [
          { text: '获取认证中心URL', link: '/api/open-auth-url' },
          { text: '使用临时授权码申请应用凭证', link: '/api/request-application-credential' },
          { text: '发起单点退出', link: '/api/single-sign-out' }
        ]
      },
      {
        text: '客户端配置',
        items: [
          { text: '申请应用', link: '/client/apply-application' },
          { text: '应用接入', link: '/client/application-integration' },
          { text: '应用上架', link: '/client/application-listing' }
        ]
      },
      {
        text: '私有化部署',
        items: [
          { text: '使用 Docker', link: '/deployment/docker-setup' },
          { text: '服务端配置', link: '/deployment/server-configuration' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dongzhengru/EasyAuth' },
      {
        icon: {
          svg: '<svg t="1732253147903" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5646" width="500" height="500"><path d="M562.9 80.9C535.4 56 493.5 56 466 80.9L74 453.1c-14.7 13.5-15.7 36.4-2.2 51.1 13.3 14.5 35.8 15.7 50.6 2.6l6.2-5.9v388.4c0 39.9 32.3 72.4 72.2 72.4h210.5V744c0-28.1 22.7-50.9 50.8-51h99.1c28.1 0 50.9 22.8 50.9 50.9V961.7h215.4c39.9 0 72.3-32.4 72.3-72.3V505.7c16.1 14.5 38.9 13.4 52.2-1.5 13.4-14.8 12.2-37.7-2.6-51.1L562.9 80.9z" p-id="5647"></path></svg>'
        },
        link: 'https://www.zhengru.top',
      }
    ],
    footer: {
      message: '',
      copyright: 'Copyright © 2024 正如'
    }
  }
})
