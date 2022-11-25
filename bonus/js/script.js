const { createApp } = Vue;

createApp ({
    data(){
        return {
            greeting : "Hello world",
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png",
            altImg : "logo Vue js"
        }
    },
    methods: {
        changeColor : function(){
            event.target.style.color="red";
        },
    }
}).mount("#root");