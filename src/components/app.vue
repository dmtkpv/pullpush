<!--
    Styles
-->

<style>


</style>



<!--
    Template
-->

<template>
    <div id="app" class="u-container" v-if="!loading">
        <router-view />
        <layout-footer />
    </div>
</template>



<!--
    Scripts
-->

<script>

    import Data from '@/common/services/data'
    import layoutFooter from '@/components/layout/footer.vue'

    export default {

        components: {
            layoutFooter
        },

        data () {
            return {
                loading: true
            }
        },

        mounted () {
            Data.init().finally(() => {
                this.loading = false;
            });
        }

    }

</script>
