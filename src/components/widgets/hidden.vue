<!--
    Styles
-->

<style>



</style>



<!--
    Template
-->

<template>
    <input type="text" disabled :value="JSON.stringify(value)">
</template>



<!--
    Scripts
-->

<script>

    export default {

        props: [
            'value',
            'options'
        ],

        mounted () {

        }

    }

    export const config = {
        name: 'hidden',
        icon: '♠',
        type: null,
        options: [
            {
                field: 'placeholder',
                widget: 'string',
                options: {}
            }

        ],
        toString (value) {
            return value;
        }
    }

</script>
