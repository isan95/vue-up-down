import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';


Vue.use(VueRouter);


export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Home
    },
    {
      path: '/login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/about'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});


/*
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ //'./views/About.vue')
  //},
/*
  {
    path: '/login',
    name: 'Iniciar sesión',
    component: () => import('./views/Login.vue')
  },

  {
    path: '/upload',
    name: 'Subir Archivo',
    component: () => import('./components/Upload.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/about'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router */