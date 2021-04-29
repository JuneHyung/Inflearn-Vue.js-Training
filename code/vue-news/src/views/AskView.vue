<template>
    <div>
        <div v-for="(item, index) in asks" :key="index">{{ item.title }}</div>
    </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';
export default {
    data() {
        return {
            asks: [],
        };
    },
    cerated() {
        fetchAskList()
            .then((response) => (this.ask = response.data))
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>

<style></style>
