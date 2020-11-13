<!--
    Styles
-->

<style>



</style>



<!--
    Template
-->

<template>
    <label>
        <input type="checkbox" :checked="value" @change="$emit('input', $event.target.checked)" />
        {{ options.label ? options.label : '' }}
    </label>
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
        name: 'checkbox',
        icon: '♠',
        type: Boolean,
        options: [],
        toString (value) {
            return value;
        }
    }

</script>
