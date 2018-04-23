angular.module('angularfireSlackApp')
  .controller('MessagesCtrl', function(profile, channelName, messages){
    var messagesCtrl = this;

    messagesCtrl.messages = messages;
    messagesCtrl.channelName = channelName;

    messagesCtrl.message = '';

    messagesCtrl.messages.$watch(function(){
      console.log("new message")
      if(profile.$id != messagesCtrl.messages[messagesCtrl.messages.length-1].uid){
        if(profile.newMessage == undefined) profile.newMessage = {};
        profile.newMessage[messagesCtrl.messages[messagesCtrl.messages.length-1].uid] = true;
        profile.$save().then(function(){
      })}
      console.log(messagesCtrl.messages[messagesCtrl.messages.length-1].uid)
    })

    messagesCtrl.sendMessage = function (){
      if(messagesCtrl.message.length > 0){
        messagesCtrl.messages.$add({
          uid: profile.$id,
          body: messagesCtrl.message,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        }).then(function (){
          messagesCtrl.message = '';
        });
      }
    };

  });
