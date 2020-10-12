<!--
    Styles
-->

<style>

    .l-header {
        position: fixed;
        height: 70px;
        width: 784px;
        background: #ECEFF1;
    }
    .l-header .logo {
        margin-right: 8px;
    }
    .l-header h1 {
        font-size: 18px;
    }

</style>



<!--
    Template
-->

<template>
    <header class="l-header u-row">
        <ui-icon class="logo" :name="icon" />
        <h1>Collections</h1>
        <div class="u-flex" />
        <slot />
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
        ],

        mounted () {
            console.log(this);
        }

    }

</script>
