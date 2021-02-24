app.component('photo-items',{
    props: ['photo'],
    template:
    /*html*/
    `
        <button v-show="photo.show" v-on:click="$emit('photo-view')" v-on:dblclick="photo.done = !photo.done"><img :src="photo.url" width="150" height="150"></button>
        <span v-show="photo.show" class="text-sm font-medium ml-5 flex flex-col-reverse items-center"> {{photo.alt}} <br/>
        <i v-show="photo.done" class="im im-heart text-pink-500 "></i>
        </span>
    `
})