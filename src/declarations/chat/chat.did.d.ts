import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface DirectMessage {
  'created' : bigint,
  'messageId' : string,
  'edited' : boolean,
  'body' : MessageBody,
  'sender' : string,
  'chatId' : string,
  'receiver' : string,
}
export interface MessageBody {
  'video' : [] | [string],
  'text' : [] | [string],
  'image' : [] | [string],
}
export type Result = { 'ok' : null } |
  { 'err' : string };
export type Result_1 = { 'ok' : User } |
  { 'err' : string };
export type Result_2 = { 'ok' : Array<DirectMessage> } |
  { 'err' : string };
export interface User {
  'id' : [] | [string],
  'userName' : string,
  'dateJoined' : bigint,
  'email' : [] | [string],
}
export interface _SERVICE {
  'createUser' : ActorMethod<[User], undefined>,
  'deleteChat' : ActorMethod<[string], Result>,
  'deleteMessage' : ActorMethod<[string, string], Result>,
  'deleteUser' : ActorMethod<[string], undefined>,
  'editMessage' : ActorMethod<[DirectMessage], Result>,
  'getMessages' : ActorMethod<[string], Result_2>,
  'getUser' : ActorMethod<[string], Result_1>,
  'getUserChats' : ActorMethod<[string], Array<string>>,
  'getUsers' : ActorMethod<[], Array<User>>,
  'sendMessage' : ActorMethod<[DirectMessage], Result>,
  'updateUser' : ActorMethod<[User], Result>,
}
