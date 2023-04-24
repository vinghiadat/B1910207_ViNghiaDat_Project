import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Login.vue"),
  },

  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Register.vue"),
  },
  {
    path: "/products",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Product.vue"),
  },
  {
    path: "/",
    name: "Index",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Index.vue"),
  },
  {
    path: "/header",
    name: "Header",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Header.vue"),
  },

  {
    path: "/footer",
    name: "Footer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Footer.vue"),
  },

  {
    path: "/lienhe",
    name: "Lienhe",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Lienhe.vue"),
  },

  {
    path: "/gioithieu",
    name: "Gioithieu",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Gioithieu.vue"),
  },
  {
    path: "/giohang",
    name: "GioHang",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/GioHang.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
