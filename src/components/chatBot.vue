<template>
<div class="chat-bot-style">
  <div class="chat-rooms">
    <chatrooms />
  </div>
  <div class="chat-history">
    <div class="chat-history-heading">
      {{chatHistoryHeading}}
    </div>
    <div class="chat-messages">
      <chat-history />
    </div>
    <div class="sending-blog">
      <chat-send-blog />
    </div>
  </div>
</div>
  

</template>

<script lang="ts">
import chatHistory from './chatHistory.vue';
import chatSendBlog from './chatSendingBlog.vue'
import chatrooms from './chatrooms.vue';

import { Options, Vue } from "vue-class-component";
import { mapGetters, mapActions } from 'vuex'

@Options({
  components: {
    chatHistory, chatSendBlog, chatrooms
  },
  computed: mapGetters([
    'chatHistoryHeading',
    
  ]),
})
export default class Chatrooms extends Vue {

}
</script>

<style scoped>
.chat-bot-style {
  position: fixed;
  margin-top: 0px;
  background-color: white;
  width: 100%;
  border: 1px solid lightgray;
}
.chat-rooms {
  float: left;
  width: 30%;
}
.chat-history {
  float: right;
  width: 70%;
  border-left: 1px solid lightgray;
}
.chat-history-heading {
  padding: 15px 15px;
  height: 50px;
  font-weight: bold;
  border-bottom: 1px solid lightgray;
}
.chat-messages {
  background-color: lightgreen;
  height: calc(100vh - 140px);
  overflow-y: scroll;
}
::-webkit-scrollbar{
  width:5px;
}
::-webkit-scrollbar-thumb{
  background: grey;
}
.sending-blog {
  height: 90px;
  background-color: lightgreen;
}
@media only screen and (max-width: 768px) {
  .cht-bot-style {
    margin-top: 0px;
    margin-left: 0px;
    padding-right: 0px;
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 320px) {
  .cht-bot-style {
    margin-top: 0px;
    margin-left: 0px;
    background-color: whitesmoke;
    width:100%;
    height: 100%;
  }
} 
@media screen and (max-width: 280px) {
  .cht-bot-style {
    border-radius: 10px;
    margin-top: 0px;
    margin-left: 0px;
    background-color: whitesmoke;
    width:100%;
    height: 100%;
  }
  .headingofbot {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
}
}
</style>