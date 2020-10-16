<!--
    Styles
-->

<style>


    /* main */

    .l-nav {
        flex: 0 0 240px;
        padding-bottom: 24px;
    }


    /* logo */

    .l-nav .logo {
        height: var(--h-header);
        justify-content: center;
        margin-right: 48px;
    }
    .l-nav .logo a {
        color: var(--cl-gray-5);
    }
    .l-nav .logo a:hover {
        color: var(--cl-gray-7);
    }


    /* push */

    .l-nav .push {
        display: flex;
        margin-right: 48px;
        margin-bottom: 48px;
    }


    /* scroll */

    .l-nav .ui-scroll {
        padding-right: 48px;
    }


    /* section */

    .l-nav .section {
        margin-bottom: 48px;
    }
    .l-nav .section .label {
        position: sticky;
        top: 0;
        padding-left: 18px;
        padding-bottom: 16px;
        text-transform: uppercase;
        color: var(--cl-gray-3);
        background: var(--cl-gray-0);
    }
    .l-nav .section .ui-button {
        display: flex;
        margin-top: 4px;
    }


    /* logout */

    .l-nav .logout {
        flex-shrink: 0;
    }


</style>



<!--
    Template
-->

<template>
    <nav class="l-nav u-col">

        <div class="logo u-row">
            <a class="f2 t24">statix-test</a>
        </div>

        <ui-button class="push" icon="push" text="Push changes" />

        <ui-scroll class="u-flex u-col">

            <div class="section">
                <p class="label t12 w5">Collections</p>
                <ui-button type="nav" text="About" />
                <ui-button type="nav" text="Projects"/>
                <ui-button type="nav" text="Public" />
                <ui-button type="nav" text="Private" />
            </div>

            <div class="section">
                <p class="label t12 w5">Modules</p>
                <ui-button type="nav" icon="media" text="Uploads" to="/settings/collections" />
                <ui-button type="nav" icon="database" text="Collections" to="/settings/collections" />
                <ui-button type="nav" icon="users" text="Users" />
                <ui-button type="nav" icon="key" text="Roles" />
                <ui-button type="nav" icon="actions" text="Actions" />
            </div>

            <div class="u-flex" />
            <ui-button type="nav" icon="logout" text="Sign out" class="logout" to="/login" />

        </ui-scroll>


    </nav>
</template>



<!--
    Scripts
-->

<script>

    import uiButton from '@/components/ui/button.vue'
    import uiScroll from '@/components/ui/scroll.vue'

    export default {

        components: {
            uiButton,
            uiScroll
        }

    }

</script>
