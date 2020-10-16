<!--
    Styles
-->

<style>

    #dashboard {
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 48px;
        height: 100%;
        align-items: stretch;
    }
    #dashboard .l-nav {
        flex-shrink: 0;
    }
    #dashboard .l-content {
        background: var(--cl-white);
        border-radius: 3px 3px 0 0;
    }



</style>



<!--
    Template
-->

<template>
    <div id="dashboard" class="u-row" v-if="success">
        <layout-nav />

        <router-view class="u-flex" />
        <layout-modal />
    </div>
    <layout-error v-else-if="error" :error="error" />
    <ui-spinner v-else size="40" />
</template>



<!--
    Scripts
-->

<script>

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

        props: [
            'error',
            'success'
        ]

    }

</script>
