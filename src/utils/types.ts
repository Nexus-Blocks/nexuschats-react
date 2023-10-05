export interface ChatMessage {
    name: string;
    message: string;
  }
  
  export interface Typing {
    name: string;
  }
  
  export type GroupChatMessage =
    | { UserTyping: Typing }
    | { Message: ChatMessage };
    
  export interface PingPongMessage {
    message: string;
  }
  
  export type AppMessage =
    | { PingPong: PingPongMessage }
    | { GroupMessage: GroupChatMessage };


// -------------------------------------MESSAGING-------------------------------------  

export interface DirectMessageType {
  'created' : bigint,
  'messageId' : string,
  'edited' : boolean,
  'body' : MessageBody,
  'sender' : string,
  'chatId' : string,
  'receiver' : string,
}
export interface MessageBody {
  'video' : null | string,
  'text' : null | string,
  'image' : null | string,
}