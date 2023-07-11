import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: "/", // [경로]
      name: "main", // [이름]
      component: () => import('@/view/Main.vue') // [로드 파일]
    },
    {
      path: "/Membership", // [경로]
      name: "Membership", // [이름]
      component: () => import('@/view/Membership.vue') // [로드 파일]
    },
    {
      path: "/Custom", // [경로]
      name: "Custom", // [이름]
      component: () => import('@/view/Custom.vue') // [로드 파일]
    }
];

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export default router