import ListView from './ListView';
import bus from '../utils/bus.js';

export default function createListVIew(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리입니다.
        name: name, // name이 JobsView나 newsView등이 될거다.
        created() {
            bus.$emit('start:spinner');
            this.$store
            .dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                console.log('fetched');

                bus.$emit('end:spinner');
            })
            .catch((error) => console.log(error));
            // setTimeout(() => {
            //     this.$store
            //         .dispatch('FETCH_LIST', this.$route.name)
            //         .then(() => {
            //             console.log('fetched');
    
            //             bus.$emit('end:spinner');
            //         })
            //         .catch((error) => console.log(error));
            // }, 3000);
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}