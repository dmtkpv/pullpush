<!--
    Styles
-->

<style>



</style>



<!--
    Template
-->

<template>
    <section class="u-col">

        <layout-header :title="`Collection ${$route.params.name}`">
            <ui-button icon="plus" />
        </layout-header>

        <layout-table class="l-content u-flex" />

    </section>
</template>



<!--
    Scripts
-->

<script>

    import layoutHeader from '@/components/layout/header.vue'
    import layoutTable from '@/components/layout/table.vue'
    import uiButton from '@/components/ui/button.vue'

    export default {

        components: {
            layoutHeader,
            layoutTable,
            uiButton
        },

        methods: {

            add () {

            }

        }

    }

</script>
