<!--
    Styles
-->

<style>

    #dashboard {
        max-width: 1024px;
        min-height: 100%;
        margin: 0 auto;
        align-items: stretch;
    }


</style>



<!--
    Template
-->

<template>
    <div id="dashboard" class="u-row">
        <layout-nav v-if="success" />
        <router-view v-if="success" class="u-flex" />
        <layout-modal v-if="success" />
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

        beforeRouteEnter (from, to, next) {
            API.authorized ? next() : next('/login');
        },

        computed: {

            loading () {
                return !this.success && !this.error;
            }

        },

        methods: {

            onSuccess () {
                this.success = true;

            },

            onError (error) {
                this.error = error;
            }

        },

        created () {
            Data.refresh().then(this.onSuccess).catch(this.onError);
        }



    }

</script>
