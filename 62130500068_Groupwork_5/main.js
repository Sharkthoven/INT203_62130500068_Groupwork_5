
const app = Vue.createApp({
    data() {
        return {
            msg: 'Photo Gallery',
            photosets: [
                        {url:'img/Beethoven.jpg', alt: "Ludwig V. Beethoven", done: false, show: true}, 
                        {url:'img/Chopin.jpg', alt: "Frederic Chopin", done: false, show: true},
                        {url:'img/Liszt.jpg', alt: "Franz Liszt", done: false, show: true}, 
                        {url:'img/Mozart.jpg', alt: "Joannes A. Mozart", done: false, show: true}
                       ],
            inputTask: "",
            searchIconBTN: true,
            cancelFunc: false,
            noPhoto: false,
            expand: false,
            pictureToExpand: "",
        }
    },

    methods: {
        search() {
            this.searchIconBTN = false;
            this.cancelFunc = true;
        },
        cancel() {
            this.searchIconBTN = true;
            this.cancelFunc = false;
            for (let i = 0; i < this.photosets.length; i++) {
                    this.photosets[i].show = true;
            }
        },
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
        expanded(index) {
            this.expand = true;
            this.pictureToExpand = this.photosets[index].url;
        }
        
    },

    computed: {
        numberOfPicture() {
            return this.photosets.length;
        },
        numberOfLiked() {
            return this.photosets.filter(p => p.done).length;
        }
    },

})

