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
        <layout-header icon="cube" title="Collections">
            <ui-button icon="plus" />
        </layout-header>
        <layout-table class="u-flex" />
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
