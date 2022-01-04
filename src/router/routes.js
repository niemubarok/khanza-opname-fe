
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/depo",
    name:'depo',
    component: () => import("pages/opname/ChooseDepo.vue"),
  },
  {
    path: "/so",
    name: "so",
    component: () => import("pages/opname/FormSO.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes
