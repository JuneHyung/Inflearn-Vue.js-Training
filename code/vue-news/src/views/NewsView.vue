<template>
    <div>
        <div v-for="(user, index) in users" :key="index">{{ user.title }}</div>
    </div>
</template>

<script>
// import axios from 'axios';
import { fetchNewsList } from '../api/index.js';

export default {
    data() {
        return {
            users: [],
        };
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
        fetchNewsList()
            .then((response) => {
                console.log(response);
                this.users = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>

<style></style>
