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

a {
    color: #34495e;
    text-decoration: none;
}
a:hover {
    color: #42b883;
}
a.router-link-exact-active {
    text-decoration: underline;
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
