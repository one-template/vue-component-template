// More: https://vuepress.vuejs.org/config/

module.exports = {
  title: 'vue-component-template',
  description: 'Fast build vue component and documentation.',
  port: 8888,
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/one-template/vue-component-template' },
    ],
    sidebar: {
      '/': [
        '',
        'changelog',
        'markdown',
        'demo'
      ]
    },
    smoothScroll: true,
  },
}