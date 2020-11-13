<!--
    Styles
-->

<style scoped>

    .title {
        margin-top: 64px;
        margin-bottom: 24px;
        justify-content: space-between;
    }

</style>



<!--
    Template
-->

<template>
    <section>


        <!-- header -->

        <layout-header>
            <h1 v-if="name">{{ name | capitalize }} settings</h1>
            <h1 v-else>Create collection</h1>
            <a @click="save">Save</a>
        </layout-header>


        <!-- Settings -->

        <h2 class="title">Settings</h2>
        <layout-form :fields="settings" :values="collection" />


        <!-- fields -->

        <div class="title u-row">
            <h2>Fields</h2>
            <a @click="showPopup">Add</a>
        </div>

<!--        <layout-list>-->
<!--            <div v-for="property in properties">-->
<!--                <h3><a>{{ property.field }}</a></h3>-->
<!--                <a>Delete</a>-->
<!--            </div>-->
<!--        </layout-list>-->


        <!-- field popup -->

        <layout-field v-if="popup" :values="activeField" @close="hidePopup" />


    </section>
</template>



<!--
    Scripts
-->

<script>

    import Data from '@/common/services/data'
    import { capitalize } from '@/common/services/utils'
    import layoutHeader from '@/components/layout/header.vue'
    import layoutList from '@/components/layout/list.vue'
    import layoutForm from '@/components/layout/form.vue'
    import layoutField from '@/components/layout/field.vue'

    export default {

        components: {
            layoutHeader,
            layoutList,
            layoutForm,
            layoutField
        },

        filters: {
            capitalize
        },

        data () {
            return {
                collection: {},
                settings: [],
                fields: [],
                activeField: undefined,
                popup: false
            }
        },

        computed: {

            name () {
                return this.$route.params.collection;
            }

        },

        watch: {

            'model.name' (value) {
                this.property.table = value;
            }

        },

        methods: {

            showPopup () {
                this.popup = true;
            },

            hidePopup () {
                this.popup = false;
            },

            save () {
                console.log(this.collection);
            }

        },

        async mounted () {
            this.settings = Data.getFields('collections');
            if (this.name) this.collection = await Data.getFile(`collections/${this.name}`);
            else this.collection = Data.getBlank(this.settings);
            this.fields = Data.getFields(this.name);
            this.showPopup();
        }

    }

</script>
