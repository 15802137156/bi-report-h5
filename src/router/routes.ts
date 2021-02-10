function load(path: string) {
  return (resolve: any) => require([`@/views/${path}`], resolve)
}

const routes = [
  {
    path: '/home',
    name: 'home',
    meta: { title: '首页' },
    component: load('home/index'),
  },
  {
    path: '/commercial/briefing',
    name: 'commercialBriefing',
    meta: { title: '商业化管理简报' },
    component: load('commercial/index'),
  },
  {
    path: '/management/bulletin',
    name: 'managementBulletin',
    meta: { title: '商业化管理简报' },
    component: load('management/index'),
  },
  {
    path: '/weather/report',
    name: 'commercialBriefing',
    meta: { title: '天气项目管理简报' },
    component: load('weather/index'),
  },
  {
    path: '*',
    redirect: '/home',
  },
];

export default routes;

