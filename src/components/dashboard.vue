<!--
    Styles
-->

<style>

    #dashboard {
        /*min-height: 100%;*/
    }


</style>



<!--
    Template
-->

<template>
    <div id="dashboard">
        <layout-nav v-if="success" />
        <layout-modal v-if="success" />
        <router-view v-if="success" />
        <layout-error v-if="error" :error="error" />
        <ui-spinner size="40" v-if="loading" />
    </div>
</template>



<!--
    Scripts
-->

<script>

    import API from '@/common/services/api'
    import Data from '@/common/services/data'
    import layoutNav from '@/components/layout/nav.vue'
    import layoutModal from '@/components/layout/modal.vue'
    import layoutError from '@/components/layout/error.vue'
    import uiSpinner from '@/components/ui/spinner.vue'

    export default {

        components: {
            layoutNav,
            layoutModal,
            layoutError,
            uiSpinner
        },

        data () {
            return {
                success: false,
                error: false
            }
        },

        computed: {

            loading () {
                return !this.success && !this.error;
            }

        },

        beforeRouteEnter (from, to, next) {
            API.authorized ? next() : next('/login');
        },

        async created () {

            Data.refresh()
                .then(() => {
                    this.success = true;
                })
                // .catch(error => {
                //     this.error = error;
                // })
        }



    }

</script>
