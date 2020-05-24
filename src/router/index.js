import Vue from "vue";
import VueRouter from "vue-router";

import Nprogress from "nprogress";

import { RouteName } from "@/common/const/route-name.const";

import { usersResolver } from "@/router/resolvers/users.resolver";
import { userResolver } from "@/router/resolvers/user.resolver";

Vue.use(VueRouter);

// TODO: Add 404 Page;
const routes = [
  {
    path: "/",
    redirect: `/${RouteName.users}`
  },
  {
    path: "*",
    redirect: `/${RouteName.users}`
  },
  {
    path: `/${RouteName.users}`,
    component: () => import("../components/content/Users.vue"),
    beforeEnter: usersResolver
  },
  {
    path: `/${RouteName.selectedUsers}`,
    component: () => import("../components/content/SelectedUsers.vue")
  },
  {
    path: `/${RouteName.user}/:username`,
    name: RouteName.user,
    component: () => import("../components/content/User.vue"),
    beforeEnter: userResolver
  }
];

const router = new VueRouter({
  routes
});

router.beforeResolve((to, from, next) => {
  Nprogress.start();
  next();
});

router.afterEach(() => Nprogress.done());

export default router;
