<!--
    Styles
-->

<style>

    .l-error {
        text-align: center;
        max-width: 320px;
    }
    .l-error svg {
        margin: 0 auto;
        width: 32px;
        height: 32px;
    }

</style>



<!--
    Template
-->

<template>
    <div class="l-error u-center">
        <ui-icon name="error" />
        <h2>{{error.title || 'Something went wrong'}}</h2>
        <p>{{error.message}}</p>
    </div>
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
            'error'
        ]

    }

</script>
