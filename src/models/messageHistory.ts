
export class messageHistory {
  text: any;
  sender: string;
  room:any;
  time: any;
  date: any;

  constructor(text: string) {
    this.text = text;
    this.sender = "";
    this.room = "";
    this.time = "";
    this.date = "";
  }
}
        
export default messageHistory;