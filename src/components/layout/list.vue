<!--
    Styles
-->

<style>

    .l-list {

    }
    .l-list > * {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 0;
        border-bottom: 1px solid #CCCCCC;
    }
    .l-list > *:first-child {
        border-top: 1px solid #CCCCCC;
    }

</style>



<!--
    Template
-->

<template>
    <div class="l-list">
        <slot />
    </div>
</template>



<!--
    Scripts
-->

<script>

    export default {

    }

</script>
