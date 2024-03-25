// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const tailwindPlugin = require('./plugins/tailwind-plugin.cjs')

const config = {
  title: 'AI学习 AI教程 Midjourney学习教程 chatgpt学习教程',
  tagline: 'AI学习 AI教程 Midjourney学习教程 chatgpt学习教程',
  url: 'https://zoz.la',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hawana123',
  projectName: 'aidocs',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      zh: {
        htmlLang: 'zh-Hans',
      },
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 6,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }),
    ],
  ],

  plugins: [tailwindPlugin, 'docusaurus-plugin-sass'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      metadata: [{name: 'keywords', content: 'AI, Prompt Engineering, GPT-3, ChatGPT, Midjourney, Learning Prompt, AI, How to use Midjourney, How to use ChatGPT'}],
      announcementBar: {
        content:
          '⭐ 头像魔法师 <a target="_blank" href="https://av.zoz.la">立即体验</a>.⭐',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      navbar: {
        title: 'Learning ai',
        logo: {
          alt: 'Learning Prompt logo',
          src: 'img/logo.svg',
        },
        items: [
          // todo: multiple version config
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'left',
          //   dropdownActiveClassDisabled: true,
          // },

          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: '👋 Welcome',
          },
          {
            type: 'doc',
            docId: 'ai-101',
            position: 'left',
            label: '🤖 AI 101',
          },
          {
            type: 'doc',
            docId: 'chatgpt-learning-path',
            position: 'left',
            label: '💬 ChatGPT',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'midjourney-learning-path',
            label: '🖼️ Midjourney',
          },
          { to: '/blog', label: '📰 Changelog', position: 'left' },
          {
            href: 'https://zoz.la',
            label: '😎 About Me',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  scripts: [
    {
      src: 'https://hm.baidu.com/hm.js?dfd34a883e2aeaf786901ebdae84d93f',
      async: true
    },
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7361597277581518',
      async: true,
      crossOrigin: 'anonymous'
    }
  ],
}

module.exports = config
