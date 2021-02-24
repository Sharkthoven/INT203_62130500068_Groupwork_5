app.component('photo-search',{
    props: {

    },

    template:
    /*html*/
    `
    <h2>
        <button v-show="searchIconBTN" @click="search"><i class="im im-magnifier mt-3 justify-center"></i></button> 
    </h2><br/>
    <input v-show="cancelFunc" type="text" v-model="inputTask" @keyup.enter="searchingFunc" size="40" placeholder="Please enter text to search" class="p-2 bg-white rounded flex-1 border-b-2 border-blue-300">
    <button v-show="cancelFunc" @click="cancel"> &ensp;Cancel </button><br/><br/>
    `,

    data() {
        return {
            inputTask: '',
            cancelFunc: false,
            searchIconBTN: true,
        }
    },

    methods: {
        searchingFunc() {
            //Checking number of unshow photo
            let falseCount = 0;

            for (let i = 0; i < this.photosets.length; i++) {
                //This loop will check photo that same with your text
                if(this.photosets[i].alt.toLowerCase().includes(this.inputTask.toLowerCase())) {
                    this.photosets[i].show = true;
                }
                else {
                    this.photosets[i].show = false;
                    falseCount ++;
                }
                //This loop will check if no photo match will show [No Photo]
                if(falseCount == this.photosets.length) {
                    this.noPhoto = true;
                }
            }
        },
        search() {
            this.searchIconBTN = false;
            this.cancelFunc = true;
        },
        cancel() {
            this.searchIconBTN = true;
            this.cancelFunc = false;
        }
    }
})