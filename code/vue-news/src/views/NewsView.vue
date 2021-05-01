<template>
    <div>
        <!-- <div>
            {{ user.title }}
        </div> -->
        <p v-for="(item, index) in this.$store.state.news" :key="index">
            <a :href="item.url">{{ item.title }}</a>
            <small>
                {{ item.time_ago }} by
                <router-link :to="`/user/${item.user}`">
                    {{ item.user }}
                </router-link>
            </small>
        </p>
    </div>
</template>

<script>
// import axios from 'axios';
// import { fetchNewsList } from '../api/index.js';

export default {
    data() {
        return {};
    },
    created() {
        // const url = 'https://api.hnpwa.com/v0/news/1.json';
        // axios
        //     .get(url)
        //     .then((response) => {
        //         console.log(response);
        //         this.users = response.data;
        //     })
        //     .catch(() => {
        //         console.log('error');
        //     });
        // 1.
        // fetchNewsList()
        //     .then((response) => {
        //         console.log(response);
        //         // 2.
        //         this.users = response.data;
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        this.$store.dispatch('FETCH_NEWS');
    },
};
</script>

<style></style>
