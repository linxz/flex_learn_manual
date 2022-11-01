import { defaultTheme, defineUserConfig } from 'vuepress';
import { navbar } from './config/navbar';
import { sidebar } from './config/sidebar';

import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)


export default defineUserConfig({
  base: '/flex_learn_manual/',
  lang: 'zh-CN',
  title: '从点到面学习 flex 弹性布局',
  description: 'flex 实战学习手册，从点到面，全面学习 flex 相关的知识',
  theme: defaultTheme({
    navbar,
    sidebar,
    editLinkText: '在 Github 上编辑该文档',
    repo: 'linxz/flex_learn_manual',
    docsBranch: 'master',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
  }),
});
