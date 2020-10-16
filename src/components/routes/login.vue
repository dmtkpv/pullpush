<!--
    Styles
-->

<style>

    #login {
        text-align: center;
    }
    #login h1 {
        margin-bottom: 16px;
    }
    #login a {
        margin-bottom: 32px;
    }

</style>



<!--
    Template
-->

<template>
    <div id="login" class="u-center">
        <h1 class="f2 t40 cl-gray-5">Pullpush CMS</h1>
        <ui-button icon="github" text="Login with Github" href="http://localhost:49032" />
    </div>
</template>



<!--
    Scripts
-->

<script>

    import uiButton from '@/components/ui/button.vue'

    export default {

        components: {
            uiButton
        }

    }

</script>
