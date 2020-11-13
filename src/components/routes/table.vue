<!--
    Styles
-->

<style>

    #table header {
        justify-content: space-between;
        border-bottom: 1px solid #EEEEEE;
        margin-bottom: 2em;
    }
    #table table {
        width: 100%;
        border-collapse: collapse;
    }
    #table table th {
        text-align: left;
    }
    #table table td {
        border-top: 1px solid #EEEEEE;
    }
    #table table th,
    #table table td {
        padding: .4em;
    }

</style>



<!--
    Template
-->

<template>
    <div id="table">


        <!-- header -->

        <header class="u-row">
            <h1>{{ $route.params.collection }}</h1>
            <router-link :to="`/${$route.params.collection}/+`">Add</router-link>
        </header>


        <!-- table -->

        <table>
            <tr>
                <th>title</th>
                <th>title</th>
                <th>title</th>
                <th>title</th>
                <th>title</th>
            </tr>
            <tr>
                <td>title</td>
                <td>title</td>
                <td>title</td>
                <td>title</td>
                <td>title</td>
            </tr>
            <tr>
                <td>title</td>
                <td>title</td>
                <td>title</td>
                <td>title</td>
                <td>title</td>
            </tr>
            <tr>
                <td>title</td>
                <td>title</td>
                <td>title</td>
                <td>title</td>
                <td>title</td>
            </tr>
        </table>


    </div>
</template>



<!--
    Scripts
-->

<script>

    export default {

    }

</script>
