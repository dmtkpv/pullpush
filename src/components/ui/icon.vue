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
    <component class="ui-icon" :is="name" :style="style" />
</template>



<!--
    Scripts
-->

<script>

    import {icons} from '@/common/utils/components'

    export default {

        components: icons,

        props: {
            name: {

            },
            size: {
                default: 22
            }
        },

        computed: {

            style () {
                return {
                    width: this.size + 'px',
                    height: this.size + 'px',
                }
            }

        }

    }

</script>
