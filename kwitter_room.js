
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
       });
       });
      });});}
//getData();

function addroom(){
Room_names=document.getElementById("roomname").value;
firebase.database().ref("/").child(Room_names).update({
      purpose:"addroomname"
});
localStorage.setItem("Room_name",Room_names);
window.location="kwitter_page.html";

}
 function redirectToRoomName(Name){
      localStorage.setItem("Room_name",Room_names);
      window.location="kwitter_page.html";
 }
 
 function logout(){
       localStorage.removeItem("username");
       localStorage.removeItem("Room_name");
       window.location="index.html";
 }