(() =>{
    //set up a Vue instance
    const vm = new Vue({
        el : "#app",

        data : {
            message : "Welcome to your first Vue app!",

            targetURL : "http://google.ca",

            vuemessage : "Yay! you can haz vue",

            anchorOff : true,

            //grabbing content and dumping it back on the page
            deliciousFruit : [
                { name: "apple", flavour: "tasty" },
                { name: "orange", flavour: "sweet" },
                { name: "pineapple", flavour: "tangy!" }
            ],

            hazVue : true
        },

        methods : {
            logFruit(e) {
                console.log(e.currentTarget); //making sure that the "p" is what shows up in the 'console when we inspect the fruit
            }
        }
    });
})();