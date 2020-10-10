<!--
    Styles
-->

<style>



</style>



<!--
    Template
-->

<template>
    <nav>


    </nav>
</template>



<!--
    Scripts
-->

<script>

    import Data from '@/common/services/data'

    export default {

        data () {
            return {
                collections: []
            }
        },

        async created () {
            // this.collections = await Data.list('collections');
            // console.log(this.collections)
        }

    }

</script>
