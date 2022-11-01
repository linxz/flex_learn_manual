import { defaultTheme, defineUserConfig } from 'vuepress';
import { navbar } from './config/navbar';
import { sidebar } from './config/sidebar';

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '从点到面学习 flex 弹性布局',
  description: 'flex 实战学习手册，从点到面，全面学习 flex 相关的知识',
  theme: defaultTheme({
    navbar,
    sidebar,
    editLinkText: '在 Github 上编辑该文档',
    repo: 'linxz/flex_learn_manual',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
  }),
});
