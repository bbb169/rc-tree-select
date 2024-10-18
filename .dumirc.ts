import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'tree-select',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  exportStatic: {},
  base: '/',
  publicPath: '/',
  styles: [
    `
      .markdown table {
        width: auto !important;
      }
    `,
  ],
});
