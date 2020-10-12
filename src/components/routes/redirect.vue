<!--
    Styles
-->

<style>



</style>



<!--
    Template
-->

<template>
    <div>Redirect</div>
</template>



<!--
    Scripts
-->

<script>

    import Data from '@/common/services/data'

    export default {

        async beforeCreate () {
            const collections = await Data.list('_collections');
            if (collections[0]) this.$router.replace(`/collections/${collections[0].id}`);
            else this.$router.replace(`/settings/collections`);
        }

        // beforeRouteEnter () {
        //     console.log('beforeRouteEnter')
        // }

    }

</script>
