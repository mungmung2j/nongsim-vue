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
    },
    {
      path: "/Special", // [경로]
      name: "Special", // [이름]
      component: () => import('@/view/Special.vue') // [로드 파일]
    },
    {
      path: "/Plan", // [경로]
      name: "Plan", // [이름]
      component: () => import('@/view/Plan.vue') // [로드 파일]
    },
    {
      path: "/Backsan", // [경로]
      name: "Backsan", // [이름]
      component: () => import('@/view/Backsan.vue') // [로드 파일]
    },

    {
      path: "/Login", // [경로]
      name: "Login", // [이름]
      component: () => import('@/view/Login.vue') // [로드 파일]
    },

    {
      path: "/Register", // [경로]
      name: "Register", // [이름]
      component: () => import('@/view/Register.vue') // [로드 파일]
    }
];

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export default router