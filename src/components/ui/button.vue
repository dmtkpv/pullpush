<!--
    Styles
-->

<style>


    /* common */

    .ui-button {
        display: inline-flex;
        flex-flow: row nowrap;
        align-items: center;
        height: 40px;
        padding: 0 18px;
        border-radius: 3px;
        font-weight: 500;
        font-size: 15px;
    }
    .ui-button .ui-icon:not(:last-child) {
        margin-left: -4px;
        margin-right: 8px;
    }


    /* types */

    .ui-button.icon {
        width: 40px;
        padding: 0;
        justify-content: center;
    }
    .ui-button.default {
        background: #263238;
        color: #FFFFFF;
    }

</style>



<!--
    Template
-->

<template>
    <a class="ui-button" :class="[type || 'default', {disabled, icon: !text}]">
        <ui-icon v-if="icon" :name="icon" />
        <span v-if="text" v-text="text" />
    </a>
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
            'type',
            'text',
            'icon',
            'disabled'
        ]

    }

</script>
