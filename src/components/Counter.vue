<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import * as types from '../store/types';

    export default {
        // methods: {
        //     ...mapActions([
        //         'increment',
        //         'decrement'
        //     ])
        // }
         methods: {
            ...mapActions({
                increment: [types.CLICK_COUNTER],
                decrement: [types.COUNTER_DECREMENT]
            })
        }
    }
</script>