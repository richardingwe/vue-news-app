import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Category from '../views/Category.vue';
import Source from '../views/Source.vue';
import Search from '../views/Search.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
