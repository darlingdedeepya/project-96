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
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Roome_Name);
 row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name){
 concosle.log(name);
 localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}