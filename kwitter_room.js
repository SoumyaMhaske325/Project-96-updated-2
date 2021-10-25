var firebaseConfig = {
    apiKey: "AIzaSyCkaUFcHiNZE-bFtaJPHRyitxiretYAmPw",
    authDomain: "kwitter-2-784cd.firebaseapp.com",
    projectId: "kwitter-2-784cd",
    storageBucket: "kwitter-2-784cd.appspot.com",
    messagingSenderId: "278631726742",
    appId: "1:278631726742:web:74652977ddaa46947d4cb7"
  };

  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("username");
  document.getElementById("user_name").innerHTML="Welcome" +user_name+"|";

  function add_room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").childhood(room_name).update({
          purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter-room.html";

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
      console.log("Room name-"+Room_names);
 row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
  });});}

 getData();

 function redirectToRoomName(name)
 {
     console.log(name);
     localStorage.setItem("room_name",name);
     window.location="kwitter_room.html";
 }
  }

  