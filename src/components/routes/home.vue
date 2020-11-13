<!--
    Styles
-->

<style scoped>


</style>



<!--
    Template
-->

<template>
    <section>


        <!-- header -->

        <layout-header>
            <h1>Collections</h1>
            <router-link to="/add">Add</router-link>
        </layout-header>


        <!-- list -->

        <layout-list>
            <div v-for="collection in collections">
                <h2><router-link :to="collection.id">{{ collection.id }}</router-link></h2>
                <router-link :to="`/${collection.id}/settings`">Edit</router-link>
            </div>
        </layout-list>


    </section>
</template>



<!--
    Scripts
-->

<script>

    import Data from '@/common/services/data'
    import layoutHeader from '@/components/layout/header.vue'
    import layoutList from '@/components/layout/list.vue'

    export default {

        components: {
            layoutHeader,
            layoutList
        },

        data () {

            return {
                collections: []
            }

        },

        mounted () {
            Data.getFile('collections').then(collections => {
                this.collections = collections;
            })

        }

    }

</script>
