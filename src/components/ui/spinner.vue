<!--
    Styles
-->

<style>

    .ui-spinner {
        position: absolute;
    }
    .ui-spinner .circle {
        color: var(--cl-gray-2);
    }
    .ui-spinner .arc {
        color: var(--cl-gray-7);
        animation: ui-spinner .5s linear infinite;
    }
    @keyframes ui-spinner {
        100% {transform: rotate(360deg);}
    }

</style>



<!--
    Template
-->

<template>
    <div class="ui-spinner u-center" :style="style">
        <svg class="circle u-stretch" viewBox="0 0 24 24">
            <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
        <svg class="arc u-stretch" viewBox="0 0 24 24">
            <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
        </svg>
    </div>
</template>



<!--
    Scripts
-->

<script>

    export default {

        props: {
            size: {
                default: 20
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
