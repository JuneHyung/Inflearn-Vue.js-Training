<template>
    <div>
        <p v-for="(job, index) in this.$store.state.jobs" :key="index">
            <a :href="job.url">{{ job.title }}</a>
            <small>{{ job.time_ago }} , {{ job.domain }}</small>
        </p>
    </div>
</template>

<script>
// import { fetchJobsList } from '../api/index.js';
export default {
    data() {
        return {
            jobs: [],
        };
    },

    created() {
        // fetchJobsList()
        //     .then((response) => (this.jobs = response.data))
        //     .catch((error) => console.log(error));
        this.$store.dispatch('FETCH_JOBS');
    },
};
</script>

<style></style>
