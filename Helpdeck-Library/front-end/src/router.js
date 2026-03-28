import Vue from 'vue';
import Router from 'vue-router';
import Helpdesk from './Views/Helpdesk.vue';
import New from './Views/New.vue';
import Show from './Views/Show.vue';
import Edit from './Views/Edit.vue';
import Test from './Views/Test.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/helpdesk'
        },
        {
            path: '/helpdesk',
            name: 'helpdesk',
            component: Helpdesk
        },
        {
            path: '/helpdesk/new',
            name: 'new-helpdesk',
            component: New
        },
        {
            path: '/helpdesk/:id',
            name: 'show',
            component: Show
        },
        {
            path: '/helpdesk/:id/edit',
            name: 'edit',
            component: Edit
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        }
    ]
});