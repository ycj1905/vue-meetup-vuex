<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            // ES6, spread operator: plz pull out all the properties/ methods in the object you have here
            // seprate key value pairs for each of them
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ]),
            ourOwn() {
                
            }
        }
    }
</script>