<template>
    <div id="app">
        <tool-bar></tool-bar>
        <transition name="page">
            <router-view></router-view>
        </transition>
        <spinner :loading="loadingStatus"></spinner>
    </div>
</template>

<script>
import ToolBar from './components/ToolBar';
import Spinner from './components/Spinner';
import bus from './utils/bus.js';
export default {
    components: {
        ToolBar,
        Spinner,
    },
    data() {
        return {
            loadingStatus: false,
        };
    },
    created() {
        bus.$on('start:spinner', this.startSpinner);
        bus.$on('end:spinner', this.endSpinner);
    },
    beforeDestroy() {
        bus.$off('start:spinner', this.startSpinner);
        bus.$off('end:spinner', this.endSpinner);
    },
    methods: {
        startSpinner() {
            this.loadingStatus = true;
        },
        endSpinner() {
            this.loadingStatus = false;
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
