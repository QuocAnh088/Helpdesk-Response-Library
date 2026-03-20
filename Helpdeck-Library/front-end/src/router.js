import Vue form 'vue';
import Router from 'vue-router';
import HelpdeskList from './Views/Helpdesk.Vue';
import New form './Views/New.Vue';
import Show form './Views/Show.Vue';
import Edit form './Views/Edit.Vue';
import Test form './Views/Test.Vue';

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