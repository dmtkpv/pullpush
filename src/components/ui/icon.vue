<!--
    Styles
-->

<style>

    .ui-icon {
        width: 22px;
        height: 22px;
    }

</style>



<!--
    Template
-->

<template>
    <component class="ui-icon" :is="name" />
</template>



<!--
    Scripts
-->

<script>

    import {icons} from '@/common/utils/components'

    export default {

        components: icons,

        props: [
            'name'
        ]

    }

</script>
