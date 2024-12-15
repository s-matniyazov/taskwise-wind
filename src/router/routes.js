const routes = [
    {path: '/login', component: import('@/layouts/LoginLayout.vue')},
    {path: '/', component: import('@/layouts/LoginLayout.vue')},
    {
        path: '/home',
        component: import('@/layouts/BaseLayout.vue'),
        children: [
            {path: '/test', component: import('@/components/pages/Test.vue')},
            {path: '/drawer-test', component: import('@/components/pages/DrawerTest.vue')},
        ]
    },
]

export default routes;
