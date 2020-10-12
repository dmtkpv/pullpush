<!--
    Styles
-->

<style>

    .l-nav {
        width: 192px;
        padding-bottom: 16px;
        margin-right: 48px;
    }
    .l-nav .fix {
        position: fixed;
        width: inherit;
        min-height: 100%;
    }

    .l-nav .logo {
        font-family: 'Playball', cursive;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        color: #607D8B;
        margin: 20px 0;
    }

    .l-nav .block {
        margin-top: 48px;
    }
    .l-nav .block .label {
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        color: #90A4AE;
        margin-left: 18px;
        margin-bottom: 16px;

    }
    .l-nav .block .ui-button {
        display: flex;
    }



</style>



<!--
    Template
-->

<template>
    <nav class="l-nav">
        <div class="fix u-col">

            <a class="logo">{{ logo }}</a>
            <ui-button icon="push" text="Push changes" />

            <div class="block">
                <p class="label">Collections</p>
                <ui-button type="link" text="About" />
                <ui-button type="link" text="Projects" />
                <ui-button type="link" text="Public" />
                <ui-button type="link" text="Private" />
            </div>

            <div class="block">
                <p class="label">Settings</p>
                <ui-button type="link" icon="cube" text="Collections" class="active" />
                <ui-button type="link" icon="users" text="Users" />
                <ui-button type="link" icon="key" text="Roles" />
                <ui-button type="link" icon="actions" text="Actions" />
            </div>

            <div class="u-flex" />
            <ui-button type="link" icon="logout" text="Sign out" class="logout" />

        </div>
    </nav>
</template>



<!--
    Scripts
-->

<script>

    import Data from '@/common/services/data'
    import uiButton from '@/components/ui/button.vue'

    export default {

        components: {
            uiButton
        },

        data () {
            return {
                collections: [],
                logo: CMS.options.repo
            }
        },

        async created () {
            // this.collections = await Data.list('collections');
            // console.log(this.collections)
        }

    }

</script>
