<!--
    Styles
-->

<style>



</style>



<!--
    Template
-->

<template>
    <input type="text" :value="value" :disabled="options.disabled" :placeholder="options.placeholder" @input="$emit('input', $event.target.value)">
</template>



<!--
    Scripts
-->

<script>

    export default {

        props: [
            'value',
            'options'
        ]

    }


    export const config = {
        name: 'string',
        icon: '♠',
        type: String,
        options: [
            {
                key: 'placeholder',
                widget: 'string'
            }

        ],
        toString (value) {
            return value;
        }
    }


</script>
