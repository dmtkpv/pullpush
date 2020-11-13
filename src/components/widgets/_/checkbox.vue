<!--
    Styles
-->

<style>



</style>



<!--
    Template
-->

<template>
    <input type="checkbox" :checked="value" @change="$emit('input', $event.target.checked)" />
</template>



<!--
    Scripts
-->

<script>

    export default {

        props: {
            value: {
                default: false
            }
        }

    }

</script>
