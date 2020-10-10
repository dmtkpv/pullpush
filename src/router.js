// ------------------
// Imports
// ------------------

import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/configs/routes'
import API from '@/common/utils/api'



// ------------------
// Setup
// ------------------

Vue.use(Router);



// ------------------
// Config
// ------------------

const router = new Router({
    routes
});



// ------------------
// Guards
// ------------------

router.beforeEach((to, from, next) => {
    // API.abort();
    next();
});



// ------------------
// Export
// ------------------

export default router;
