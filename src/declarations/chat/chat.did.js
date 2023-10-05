export const idlFactory = ({ IDL }) => {
  const User = IDL.Record({
    'id' : IDL.Opt(IDL.Text),
    'userName' : IDL.Text,
    'dateJoined' : IDL.Int,
    'email' : IDL.Opt(IDL.Text),
  });
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const MessageBody = IDL.Record({
    'video' : IDL.Opt(IDL.Text),
    'text' : IDL.Opt(IDL.Text),
    'image' : IDL.Opt(IDL.Text),
  });
  const DirectMessage = IDL.Record({
    'created' : IDL.Int,
    'messageId' : IDL.Text,
    'edited' : IDL.Bool,
    'body' : MessageBody,
    'sender' : IDL.Text,
    'chatId' : IDL.Text,
    'receiver' : IDL.Text,
  });
  const Result_2 = IDL.Variant({
    'ok' : IDL.Vec(DirectMessage),
    'err' : IDL.Text,
  });
  const Result_1 = IDL.Variant({ 'ok' : User, 'err' : IDL.Text });
  return IDL.Service({
    'createUser' : IDL.Func([User], [], ['oneway']),
    'deleteChat' : IDL.Func([IDL.Text], [Result], []),
    'deleteMessage' : IDL.Func([IDL.Text, IDL.Text], [Result], []),
    'deleteUser' : IDL.Func([IDL.Text], [], ['oneway']),
    'editMessage' : IDL.Func([DirectMessage], [Result], []),
    'getMessages' : IDL.Func([IDL.Text], [Result_2], ['query']),
    'getUser' : IDL.Func([IDL.Text], [Result_1], ['query']),
    'getUserChats' : IDL.Func([IDL.Text], [IDL.Vec(IDL.Text)], ['query']),
    'getUsers' : IDL.Func([], [IDL.Vec(User)], ['query']),
    'sendMessage' : IDL.Func([DirectMessage], [Result], []),
    'updateUser' : IDL.Func([User], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
