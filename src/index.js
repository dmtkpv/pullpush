// ------------------
// Imports
// ------------------

import '@/common/styles/base.css'
import '@/common/styles/typography.css'
import '@/common/styles/utils.css'

import Vue from 'vue'
import Router from 'vue-router'
import app from '@/components/app.vue'
import router from '@/router'
import widget from '@/widgets'



// ------------------
// Vue config
// ------------------

Vue.use(Router);
Vue.config.silent = true;
Vue.config.productionTip = false;
Vue.config.devtools = false;



// ------------------
// Exports
// ------------------

function init () {
    const $app = document.createElement('div');
    new Vue({
        el: document.body.appendChild($app),
        router,
        render: h => h(app)
    });
}

export { init, widget }



