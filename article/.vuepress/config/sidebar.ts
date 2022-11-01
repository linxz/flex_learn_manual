const articles = '/articles/';
const container = `${articles}container/`;
const element = `${articles}element/`;
const example = `${articles}example/`;

export const sidebar = [
  '/',
  `${articles}introduce.md`,
  {
    text: 'flex 容器',
    collapsible: true,
    children: [
      `${container}display.md`,
      `${container}flex-direction.md`,
      `${container}flex-wrap.md`,
      `${container}flex-flow.md`,
      `${container}justify-content.md`,
      `${container}align-items.md`,
      `${container}align-content.md`,
      `${container}gap.md`
    ]
  },
  {
    text: 'flex 元素',
    collapsible: true,
    children: [
      `${element}flex-grow.md`,
      `${element}flex-shrink.md`,
      `${element}flex-basis.md`,
      `${element}flex.md`,
      `${element}align-self.md`,
      `${element}order.md`
    ]
  },
  {
    text: '实例演示',
    link: `${example}00.md`,
    children: [
      `${example}01.md`,
      `${example}02.md`,
      `${example}03.md`,
      `${example}04.md`,
      `${example}05.md`,
    ]
  },
  `${articles}about.md`
]