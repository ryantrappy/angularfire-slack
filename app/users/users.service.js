angular.module('angularfireSlackApp')
  .factory('Users', function($firebaseArray, $firebaseObject){
    var usersRef = firebase.database().ref('users');
    var users = $firebaseArray(usersRef);

    var connectedRef = firebase.database().ref('.info/connected');

    var Users = {
      getProfile: function(uid){
        return $firebaseObject(usersRef.child(uid));
      },
      getDisplayName: function(uid){
        return users.$getRecord(uid).displayName;
      },
      getAvatar: function(uid){
        if(users.$getRecord(uid).avatar){
          return users.$getRecord(uid).avatar;
        }
        else{
          return "https://placeimg.com/640/480/animals"
        }
      },
      getGravatar: function(uid){
        return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
      },
      all: users,
      setOnline: function(uid){
        var connected = $firebaseObject(connectedRef);
        var online = $firebaseArray(usersRef.child(uid+'/online'));

        connected.$watch(function (){
          if(connected.$value === true){
            online.$add(true).then(function(connectedRef){
              connectedRef.onDisconnect().remove();
            });
          }
        });
      }
    };

    return Users;
  });
