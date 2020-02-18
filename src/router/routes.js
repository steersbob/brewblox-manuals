import menu from 'menu';
import IndexPage from 'pages/IndexPage.vue';

const content = menu.map(node => ({
  ...node,
  path: '/' + node.path,
  component: () => import(`content/${node.path}.${node.ext || 'md'}`),
}));

const routes = [
  ...content,
  {
    path: '/',
    name: 'Index page',
    component: IndexPage,
  },
];

export default routes;
