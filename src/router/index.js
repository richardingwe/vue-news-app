import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Category from '../views/Category.vue';
import Source from '../views/Source.vue';
import Search from '../views/Search.vue';
import ReadLater from '../views/ReadLater.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: Category
  },
  {
    path: '/source/:source',
    name: 'Source',
    component: Source
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/readlater',
    name: 'Read Later',
    component: ReadLater
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
