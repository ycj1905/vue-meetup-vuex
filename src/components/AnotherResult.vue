<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types'

    export default {
        computed: {
            // ES6, spread operator: plz pull out all the properties/ methods in the object you have here
            // seprate key value pairs for each of them
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                stringCounter: types.CLICK_COUNTER
            }),
            ourOwn() {
                
            }
        }
    }
</script>