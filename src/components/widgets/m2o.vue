<!--
    Styles
-->

<style>



</style>



<!--
    Template
-->

<template>
    <select v-model="model">
        <option :value="null" disabled selected>Select an item</option>
        <option v-for="item in table" :value="item.id">{{ item.name }}</option>
    </select>
</template>



<!--
    Scripts
-->

<script>

    import Data from '@/common/services/data'

    export default {

        props: [
            'value',
            'options'
        ],

        data () {
            return {
                table: []
            }
        },

        computed: {

            model: {

                get () {
                    return this.value
                },

                set (value) {
                    this.$emit('input', value);
                }

            }

        },

        async mounted () {
            this.table = await Data.getFile(this.options.table);
        }

    }

    export const config = {
        name: 'm2o',
        icon: '♠',
        type: Array
    }


</script>
