<!--
    Styles
-->

<style>



</style>



<!--
    Template
-->

<template>
    <header>
        <ui-icon :icon="icon" />
    </header>
</template>



<!--
    Scripts
-->

<script>

    import uiIcon from '@/components/ui/icon.vue'

    export default {

        components: {
            uiIcon
        },

        props: [
            'icon'
        ]

    }

</script>
