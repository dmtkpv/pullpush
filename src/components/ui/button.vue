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
    }
    .ui-button .ui-icon:not(:last-child) {
        margin-left: -4px;
        margin-right: 8px;
    }


    /* icon */

    .ui-button-icon {
        width: 40px;
        padding: 0;
        justify-content: center;
    }


    /* default */

    .ui-button-default {
        background: var(--cl-gray-9);
        color: var(--cl-white);
    }


    /* nav */

    .ui-button-nav {
        color: var(--cl-gray-8);
    }
    .ui-button-nav:hover {
        background: var(--cl-gray-033);
    }
    .ui-button-nav.active {
        background: var(--cl-gray-066);
    }


    /* link */

    /*.ui-button-link {*/
    /*    color: var(--cl-gray-6);*/
    /*}*/
    /*.ui-button-link:hover {*/
    /*    text-decoration: underline;*/
    /*    color: var(--cl-gray-9);*/
    /*}*/

</style>



<!--
    Template
-->

<template>
    <component :is="tag" class="ui-button" :class="[`ui-button-${type || 'default'}`, {disabled, 'ui-button-icon': !text}]" :to="to">
        <ui-icon v-if="icon" :name="icon" />
        <span v-if="text" v-text="text" />
    </component>
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
            'to',
            'type',
            'text',
            'icon',
            'disabled'
        ],

        computed: {

            tag () {
                return this.to ? 'router-link' : 'a';
            }

        }

    }

</script>
