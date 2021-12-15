<template>
  <div class="chatHistoryStyle" v-for="message in messages" :key="message.id">
        <div class="user" v-if="message.sender === userName">
          <p>You : {{message.time}} - {{message.date}}</p>
          <span class="userMessage bg-primary mt-3">
            {{ message.text }}
          </span>
        </div>
        <div class="client" v-if="message.sender !== userName">
          <p>{{message.sender}} : {{message.time}} - {{message.date}}</p>
          <span class="clientMessage mt-3">
            {{ message.text }}
          </span>
        </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import messageHistory from "../models/messageHistory";
import { mapGetters, mapActions } from 'vuex'

@Options({
  components: {
    
  },
  computed: mapGetters([
    'userName',
    'messages',
  
  ]),
})
export default class Home extends Vue {

}
</script>

<style scoped>
p {
  font-size: 10px;
}
.user {
  align-items: right;
  text-align: right;
  margin-right: 20px;
}
.client {
  margin-top: 20px;
  margin-left: 20px;
}
.userMessage {
  padding: 10px;
  color: white;
  text-align: center;
  font-size: 15px;
  border-radius: 10px;
}
.clientMessage {
  background-color: wheat;
  padding: 10px;
  text-align: left;
  font-size: 15px;
  border-radius: 10px;
}
.chatHistoryStyle {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>