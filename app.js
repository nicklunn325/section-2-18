let vm = Vue.createApp({
    data(){
        return {
            isPurple: false,
            isRed: false,
            selectedColor: "",
            size: 150
        }
    },
    computed: {
        circleClasses(){
            return { purple: this.isPurple, red: this.isRed }
        }
    }
}).mount('#app')