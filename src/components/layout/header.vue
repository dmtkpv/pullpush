<!--
    Styles
-->

<style>

    .l-header {
        position: sticky;
        top: 0;
        height: var(--h-header);
        /*width: var(--w-section);*/
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
        <h1>{{title}}</h1>
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
            'icon',
            'title'
        ],

        mounted () {

        }

    }

</script>
