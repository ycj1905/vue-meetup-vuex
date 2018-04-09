<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    import {mapGetters} from 'vuex';
    import * as types from '../store/types';
    
    export default {
        computed: {
            // ES6, spread operator: plz pull out all the properties/ methods in the object you have here
            // seprate key value pairs for each of them
            ...mapGetters({
                counter: [types.DOUBLE_COUNTER]
            })
        }
    }
</script>