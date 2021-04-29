<template>
    <div>
        <div v-for="(ask, index) in this.$store.state.ask" :key="index">{{ ask.title }}</div>
    </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';
// import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            // asks: [],
        };
    },
    computed: {
        // #3.
        // ...mapGetters({
        //     // 오른쪽이 vuex에서 사용한거.
        //     fetchedAsk: 'fetchedAsk',
        // }),
        // #2.
        // ...mapState({
        //     ask: (state) => state.ask,
        // }),
        // #1.
        // ask(){
        //     return this.$store.state.ask;
        // }
    },
    cerated() {
        // fetchAskList()
        //     .then((response) => (this.ask = response.data))
        //     .catch((error) => {
        //         console.log(error);
        //     });
        this.$store.dispatch('FETCH_ASK');
    },
};
</script>

<style></style>
