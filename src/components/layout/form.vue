<!--
    Styles
-->

<style>

    .l-form .field {
        margin-bottom: 16px;
    }
    .l-form .field b {
        display: block;
        margin-bottom: 8px;
    }

</style>



<!--
    Template
-->

<template>
    <div class="l-form">
        <div class="field" v-for="field in fields">
            <b>{{ field.key }} <span v-if="field.required">*</span></b>
            <component :is="field.widget" :options="field.options" v-model="values[field.key]" />
        </div>
    </div>
</template>



<!--
    Scripts
-->

<script>


    export default {

        props: [
            'fields',
            'values'
        ]

    }

</script>
