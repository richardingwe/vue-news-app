import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Category from '../views/Category.vue';
import Source from '../views/Source.vue';
import Search from '../views/Search.vue';
import SavedNews from '../views/SavedNews.vue';

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
    path: '/savednews',
    name: 'Saved News',
    component: SavedNews
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
