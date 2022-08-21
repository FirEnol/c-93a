const firebaseConfig = {
    apiKey: "AIzaSyBK8PtBkZB-onKZynxBiYGk9sNX-xeGyBI",
    authDomain: "kwitter-294a9.firebaseapp.com",
    databaseURL: "https://kwitter-294a9-default-rtdb.firebaseio.com",
    projectId: "kwitter-294a9",
    storageBucket: "kwitter-294a9.appspot.com",
    messagingSenderId: "895909753198",
    appId: "1:895909753198:web:166b3144f6f39c0dfe917f",
    measurementId: "G-J4TS1TM1FX"
  };

  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
document.getElementById("msg").value = "";
  }
  