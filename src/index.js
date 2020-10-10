// ------------------
// Imports
// ------------------

import '@/common/styles/base.css'
import '@/common/styles/colors.css'
import '@/common/styles/typography.css'
import '@/common/styles/utils.css'
// import '@/configs/components'

import Vue from 'vue';
import router from '@/router'


//
// register('@/components/widgets');
// register('@/components/views');
// register('@/common/icons');



// ------------------
// Load fonts
// ------------------

const $fonts = document.createElement('link');
$fonts.setAttribute('rel', 'stylesheet');
$fonts.setAttribute('type', 'text/css');
$fonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500|Playball&display=block');
document.head.appendChild($fonts);



// ------------------
// Exports
// ------------------

export function init (options) {


    // set options

    CMS.options = Object.assign({
        branch: 'master',
        databaseFolder: 'database',
        uploadsFolder: 'uploads',
    }, options);


    // create root node

    const $app = document.createElement('div');
    document.body.appendChild($app);


    // initialize Vue app

    new Vue({
        el: $app,
        router,
        render: h => h('router-view')
    });
}
