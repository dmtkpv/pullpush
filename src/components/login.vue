<!--
    Styles
-->

<style>

    #login {
        height: 100%;
        align-items: center;
        justify-content: center;
    }
    #login h1 {
        font-size: 40px;
        color: #546E7A;
        margin-bottom: 16px;
    }
    #login a {
        margin-bottom: 64px;
    }

</style>



<!--
    Template
-->

<template>
    <div id="login" class="u-col">
        <h1 class="t-display">Pullpush CMS</h1>
        <ui-button icon="github" text="Login with Github" href="http://localhost:49032" />
    </div>
</template>



<!--
    Scripts
-->

<script>

    import API from '@/common/utils/api'
    import uiButton from '@/components/ui/button.vue'

    export default {

        components: {
            uiButton
        },

        mounted () {
            const token = this.$route.query.access_token;
            if (!token) return API.auth(null);
            API.auth(token);
            this.$router.replace('/');
        }

    }

</script>
