export default [
    {path: '/', name: 'index', component: () => import('../Landing.vue')},
    {path: '/product/:id', name: 'product', component: () => import('../components/VDtailsProd.vue')},
    ];
