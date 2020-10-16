<!--
    Styles
-->

<style>

    #ui {
        padding: 30px;
    }

    #ui .ui-button {
        /*display: inline-flex;*/
        margin: 16px;
    }

</style>



<!--
    Template
-->

<template>
    <div id="ui">

        <ui-button icon="check" />
        <ui-button text="Click me!" />
        <ui-button icon="check" text="Click me!" />
        <ui-button icon="delete" text="Delete" />
        <ui-button icon="push" text="Push changes" />
<!--        <ui-button type="danger" icon="plus" text="Test" :disabled="true" />-->

    </div>
</template>



<!--
    Scripts
-->

<script>

    import uiButton from '@/components/ui/button.vue'

    export default {

        components: {
            uiButton
        }

    }

</script>
