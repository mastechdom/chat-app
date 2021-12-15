<template>
  <div v-if="userName === ''">
    <h1 class="heading">Welcome to ChatBot App</h1>
  <div class="nameField">
      <form class="nameBox">
        <div class="inputField bg-white">
            <input type="text" id="name-box" v-model="name" placeholder="Enter Name" />
        </div>
        <button @click="enter()" type="button" class="button bg-success btn-lg btn-block">
            Enter {{userName}}
        </button>   
    </form>
  </div>
  </div>
  <div v-if="userName !== ''">
    <chatBot />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import chatBot from "@/components/chatBot.vue"; // @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'

@Options({
  components: {
    chatBot,
  },
  computed: mapGetters([
    'userName','chatHistoryHeading'
    
  ]),
  methods: mapActions([
  ]),
  mounted: async function () {
    this.timer = setInterval(() => {
      if(this.chatHistoryHeading === "All"){
        axios.get("http://localhost:2410/messages")
            .then((resp)=>{
            console.log(resp.data);
            this.$store.commit("setState",resp.data);
      })
    } else if (this.chatHistoryHeading === "Technical") {
        axios.get(`http://localhost:2410/${this.chatHistoryHeading}`)
            .then((resp)=>{
            console.log(resp.data);
            this.$store.commit("setState",resp.data);
      })
    } else {
        axios.get(`http://localhost:2410/${this.chatHistoryHeading}`)
            .then((resp)=>{
            console.log(resp.data);
            this.$store.commit("setState",resp.data);
      })
    }
    }, 2000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
})
export default class Home extends Vue {
  name= ""
  enter() {
    const newName = this.name;
    if (this.name !== "") {
      console.log(newName)
      this.$store.commit("setUser", newName);
      this.name = "";
    }
  }
  data() {
    return {
      timer: null
    }
  }
}
</script>
<style>
.heading {
  text-align: center;
}
.nameField {
  text-align: center;
}
.button {
  margin-top: 10px;
}
</style>
