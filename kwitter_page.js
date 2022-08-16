//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDr8wVqpJ8taBqrxqx0hbFdpApCG2W4lZI",
  authDomain: "lets-chat-web-app-4f9a0.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-4f9a0-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-4f9a0",
  storageBucket: "lets-chat-web-app-4f9a0.appspot.com",
  messagingSenderId: "459315390619",
  appId: "1:459315390619:web:7d179af5ac2c0184423e3e",
  measurementId: "G-XHB4KFY1WB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
  
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

console.log("room_name"+room_name);
console.log("user_name"+user_name);

function logout() {
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}

function send()
{
   msg = document.getElementById("msg").value;
   console.log("Message "+msg);
   firebase.database().ref(room_name).push({
         username: user_name,
         message: msg,
         like: 0
   });

   document.getElementById("msg").value = "";
}
    
  function addUser()
    {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
      });
    }

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code

//End code
   } });  }); }
getData();


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");