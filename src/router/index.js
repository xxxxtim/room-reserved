import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "@/store";
// import page-component
import SingleRoom from '../views/SingleRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      store.dispatch("getRoomsStyleAPI");
      next();
    }
  },
  {
    path: '/2',
    name: 'RoomDetails',
    component: SingleRoom,
    beforeEnter: (to, from, next) => {
      store.dispatch("getAllRoomDetails", to.query.cardId);
      next()
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
