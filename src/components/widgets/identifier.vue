<!--
    Styles
-->

<style>



</style>



<!--
    Template
-->

<template>
    <input type="text" disabled :value="value">
</template>



<!--
    Scripts
-->

<script>

    import { nanoid } from 'nanoid'

    export default {

        props: [
            'value'
        ],

        mounted () {
            !this.value && this.$emit('input', nanoid());
        }

    }

    export const config = {
        name: 'identifier',
        icon: '♠',
        type: String,
        options: [],
        toString (value) {
            return value;
        }
    }

</script>
