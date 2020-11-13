<!--
    Styles
-->

<style>

    .l-property {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        padding: 32px;
    }
    .l-property .window {
        background: #FFFFFF;
        padding: 16px;
    }

</style>



<!--
    Template
-->

<template>
    <div class="l-property" @click="hide">

        <form class="window u-container">

            <layout-header>
                <h1>Field</h1>
                <a @click="save">Save</a>
            </layout-header>

            <layout-form :fields="settings" :values="field" />
            <layout-form :fields="options" :values="field.options" />


        </form>

    </div>
</template>



<!--
    Scripts
-->

<script>

    import Data from '@/common/services/data'
    import layoutHeader from '@/components/layout/header.vue'
    import layoutForm from '@/components/layout/form.vue'

    export default {

        components: {
            layoutHeader,
            layoutForm
        },

        props: [
            'values'
        ],

        data () {
            const settings = Data.getFields('fields');
            return {
                settings,
                field: this.values || Data.getBlank(settings)
            }
        },

        computed: {

            options () {
                const widget = this.field.widget;
                if (!widget) return [];
                return Data.getItem('widgets', widget).options;
            }

        },

        methods: {

            hide (event) {
                if (event.target === this.$el) this.$emit('close');
            },

            save () {
                //
                // Promise.all([
                //     CMS.trigger('field.create:before'),
                //     CMS.trigger('field.create:before'),
                //     CMS.trigger('item.create:before'),
                //     CMS.trigger('item.create:before'),
                // ])



                // this.$refs.settings.submit().then(() => {
                //     console.log('ok')
                // }).catch(error => {
                //     console.log('error', error)
                // })
                // console.log(this.$refs.settings.$el)
            }

        },

        mounted () {
            console.log(this.field)
        }

    }

</script>
