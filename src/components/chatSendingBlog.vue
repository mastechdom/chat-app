<template>
  <div class="chatSendBlogStyle">
      <form class="messageBox">
        <div class="field">
            <input type="text" id="message-box" v-model="message" placeholder="Type hereeeeeee"
            @keyup.enter="sendMessage()" />
            <span class="imageStyle" @click="sendMessage()"><i class="fa fa-arrow-right"></i>
            </span>
        </div>   
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import messageHistory from "@/models/messageHistory";
import { mapGetters, mapActions } from 'vuex';

@Options({
  components: {
    
  },
  computed: mapGetters([
    'userName'
  ]),
  methods: mapActions([
  ])
})
export default class Home extends Vue {
  message= ""

  sendMessage(): void {
      if (this.message !== "") {
        const newMessage = new messageHistory(this.message);
        newMessage.date = this.FindDate();
        newMessage.time = this.findTime();
        this.$store.commit("setMessage", newMessage);
        this.message = "";
    }
  }
  addZero = (i: any) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  FindDate = () => {
    const d = new Date();
    const day = this.addZero(d.getDate());
    const month = this.addZero(d.getMonth());
    const year = this.addZero(d.getFullYear());
    const date = day+"/"+month+"/"+year;
    return date;  
  }
  findTime = () => {
    const d = new Date();
    const hours = this.addZero(d.getHours());
    const minutes = this.addZero(d.getMinutes());
    const seconds = this.addZero(d.getSeconds());
    const time = hours+":"+minutes+":"+seconds;
    return time;
  }
}
</script>

<style scoped>
.chatSendBlogStyle {
  margin: 0 auto;
  width: 50%;
  border-radius: 10px;
}
input[type=text] {
  width: 90%;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  outline: none;
}
.field {
  background-color: white;
    border-radius: 10px;
}

/*
@media only screen and (max-width: 768px) {
  input[type="text"] {
    width: 342px;
    padding: 11px 4px;
  }
  .imageStyle {
    padding: 0px;
  }
  .chatSendBlogStyle {
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
*/

@media screen and (max-width: 767px) {
  .chatSendBlogStyle {
    width: 100%;
  }
  input[type="text"] {
    width: 90%;
    padding: 11px 4px;
  }
  .imageStyle {
    padding: 0px;
  }
}
/*
@media screen and (max-width: 280px) {
  input[type="text"] {
    width: 255px;
    padding: 11px 4px;
  }
  .imageStyle {
    padding-right: 14px;
  }
  .chatSendBlogStyle {
    position: fixed;
    bottom: 0;
    left: 0;
  } 
}
*/
</style>