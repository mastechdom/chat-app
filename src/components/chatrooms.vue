<template>
  <div class="chat-rooms-name">
    <div class="chat-rooms-heading">
        Chat Rooms
    </div>
    
    <div v-for="room in chatRooms" :key="room.id" >
        <div class="name-box" :class="{'clickedDiv' : room === chatHistoryHeading}" @click="enter(room)">
            {{room}}   
        </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import { mapGetters, mapActions } from 'vuex'

@Options({
  components: {

  },
  computed: mapGetters([
    'chatRooms','chatHistoryHeading'
    
  ]),
})
export default class Chatrooms extends Vue {


  enter(room:any): void {
    console.log(room)
    this.$store.commit("setRoomHeading", room);
    if(room === "All"){
        axios.get("http://localhost:2410/messages")
            .then((resp)=>{
            console.log(resp.data);
            this.$store.commit("setState",resp.data);
      })
    } else if (room === "Technical") {
        axios.get(`http://localhost:2410/${room}`)
            .then((resp)=>{
            console.log(resp.data);
            this.$store.commit("setState",resp.data);
      })
    } else {
        axios.get(`http://localhost:2410/${room}`)
            .then((resp)=>{
            console.log(resp.data);
            this.$store.commit("setState",resp.data);
      })
    }
    }
}

</script>
<style scoped>
.chat-rooms-heading {
    padding: 15px 15px;
    height: 50px;
    font-weight: bold;
    border-bottom: 1px solid lightgray;
}
.name-box {
    padding: 15px 15px;
    font-weight: bold;
    margin: 10px;
    border-radius: 10px;
}
.clickedDiv {
    color: white;
    background-color: blue;
}
/* .name-box:active{
    background-color: blue;
} */
/* .name-box:focus {
    background-color: red;
} */
</style>>
