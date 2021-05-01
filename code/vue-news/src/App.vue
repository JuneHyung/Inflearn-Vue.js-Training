<template>
    <div id="app">
        <tool-bar></tool-bar>
        <transition name="page">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import ToolBar from './components/ToolBar';
export default {
    components: {
        ToolBar,
    },
    methods: {
        fetchData() {
            console.log('hello');
        },
    },
};
</script>

<style>
body {
    padding: 0;
    margin: 0;
}
/* Router Transition */
/* .fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
} */

.page-enter-active,
.page-leave-active {
    transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
    opacity: 0;
}
</style>
