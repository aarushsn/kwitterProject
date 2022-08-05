const firebaseConfig = {
      apiKey: "AIzaSyBjp0Z_Edn7l67a41dG8Q2DRMbp4Wxdzqc",
      authDomain: "quitter-html.firebaseapp.com",
      databaseURL: "https://quitter-html-default-rtdb.firebaseio.com",
      projectId: "quitter-html",
      storageBucket: "quitter-html.appspot.com",
      messagingSenderId: "258298957815",
      appId: "1:258298957815:web:8e5038825cf5495624e8f2",
      measurementId: "G-CBZQMBLWGB"
    };
    room_name=localStorage.getItem("Room_name");
    user_name=localStorage.getItem("username");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
      });
document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("Room_name");
      window.location="index.html";
}