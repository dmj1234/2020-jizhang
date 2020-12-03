import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Huihui from '@/views/Huihui.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
Vue.use(VueRouter);

const routes =[
  {
    path: '/',
    redirect: '/huihui'
  },
  {
    path: '/huihui',
    component: Huihui
  },
  {
    path:'/labels',
    component: Labels
  },
  {
    path:'/statistics',
    component: Statistics
  },
  {
    path: '*',
   component: NotFound
  }
];
const router = new VueRouter({
  routes
});

export default router;
