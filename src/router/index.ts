import Vue from 'vue';
import Router from 'vue-router';
import { setTitle } from '@/utils';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const { title } = to.meta;
  if (title) setTitle(title);

  next();
});

export default router;
