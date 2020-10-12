<!--
    Styles
-->

<style>

    .l-table {
        background: #FFFFFF;
    }


</style>



<!--
    Template
-->

<template>
    <div class="l-table">
        <table>
            <tr v-for="col in cols">
                <td>Column {{col}}</td>
            </tr>
        </table>
    </div>
</template>



<!--
    Scripts
-->

<script>

    export default {

        data () {
            return {
                cols: 1000
            }
        }

    }

</script>
