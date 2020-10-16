<!--
    Styles
-->

<style>


    /* main */

    .ui-scroll {
        position: relative;
        overflow: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .ui-scroll::-webkit-scrollbar {
        display: none;
    }


    /* bar */

    .ui-scroll .ui-scroll-bar {
        position: absolute;
        top: 0;
        right: 4px;
        width: 8px;
        border-radius: 4px;
        background: var(--cl-gray-2);
        opacity: 0;
        transition: opacity .2s;
    }
    .ui-scroll:hover .ui-scroll-bar {
        opacity: 1;
    }


</style>



<!--
    Template
-->

<template>
    <div class="ui-scroll" @mouseenter="update" @scroll="update">
        <slot />
        <div class="ui-scroll-bar" ref="bar"></div>
    </div>
</template>



<!--
    Scripts
-->

<script>

    export default {

        methods: {

            update () {
                const st = this.$el.scrollTop;
                const sh = this.$el.scrollHeight;
                const oh = this.$el.offsetHeight;
                this.$refs.bar.style.display = sh === oh ? 'none' : '';
                if (sh === oh) return;
                this.$refs.bar.style.height = oh * oh / sh + 'px';
                this.$refs.bar.style.transform = `translateY(${st + st / sh * oh}px)`;
            }

        },

        mounted () {
            this.update();
            window.addEventListener('resize', this.update);
        },

        destroyed () {
            window.removeEventListener('resize', this.update);
        }

    }

</script>
