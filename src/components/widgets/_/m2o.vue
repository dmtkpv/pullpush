<!--
    Styles
-->

<style>



</style>



<!--
    Template
-->

<template>
    <select :value="test" @change="update">
        <option :value="undefined" disabled>select something</option>
<!--        <option :value="1">select something 2</option>-->
        <option v-for="item in items" :value="item.id">{{ item[options.display] }}</option>
    </select>
</template>



<!--
    Scripts
-->

<script>

    import Data from '@/common/services/data'

    function isNumeric(str) {
        return !isNaN(str) && !isNaN(parseFloat(str));
    }

    export default {

        props: [
            'value',
            'options'
        ],

        data () {
            return {
                items: [],
                test: undefined
            }
        },

        methods: {

            update (event) {
                const value = event.target.value;
                this.$emit('input', isNumeric(value) ? parseFloat(value) : value);
            }

        },

        async mounted () {
            console.log(this.value)
            this.items = await Data.get(this.options.table);
        }

    }

</script>
