// ------------------
// Imports
// ------------------

import Router from 'vue-router'
import routes from '@//configs/routes'



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
    next();
});



// ------------------
// Export
// ------------------

export default router;
