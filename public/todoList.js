const firebaseConfig = {
    apiKey: "AIzaSyC1bmOY6K1At5IXTEwHDzWvf4-X78QJrmk",
    authDomain: "todolist-eb137.firebaseapp.com",
    projectId: "todolist-eb137",
    databaseURL:"https://todolist-eb137-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "todolist-eb137.appspot.com",
    messagingSenderId: "788653159519",
    appId: "1:788653159519:web:481a2f3cd4774c0782d7ea"
};
const app = firebase.initializeApp(firebaseConfig);
(function () {
    document.querySelector('#add').addEventListener('click', function () {
      let input = document.querySelector('#text');
      let list = document.querySelector('#list'); 
      
      let item = document.createElement('li'); 
      let itemText = document.createTextNode(input.value); 
      
      item.appendChild(itemText); 
      list.appendChild(item); 
      
      input.value = ""; 
    });
  })();