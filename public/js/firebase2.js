
var config = {
    apiKey: "AIzaSyASyBJA2-jFs6VQcVpgWN4cz4n-bLdiYpQ",
    authDomain: "lineagepremier-58b7f.firebaseapp.com",
    databaseURL: "https://lineagepremier-58b7f.firebaseio.com",
    projectId: "lineagepremier-58b7f",
    storageBucket: "lineagepremier-58b7f.appspot.com",
    messagingSenderId: "192675605713"
  };
  firebase.initializeApp(config);

var database = firebase.database();
const usersRef = firebase.database().ref("Messages"); 

$("#Submit").on("click",function(event){
    event.preventDefault();
    const addUserInputsUI = document.getElementsByClassName("text-input");

    let newUser = {};

    for (let i = 0, len = addUserInputsUI.length; i < len; i++) {

        let key = addUserInputsUI[i].getAttribute('data-key');
        let value = addUserInputsUI[i].value;
        newUser[key] = value;
        console.log(newUser);
   
        usersRef.push(newUser, function(){
            console.log("data has been inserted");
          });
    

        };  


// var password = "cole123";
// let ad = (
//     '<table id="table" class="table">' +
//     '<tbody>' +
//     '<tr>' + 
//     '<th>Name</th>'+
//     '<th>Email </th>'+
//     '<th>Message </th>'+
//     '<th>Delete </th>'+ 
//     '<th> ID </th>' +
//     '</tr>'+
//     '</tbody>'+
//     '</table>');

// $("#send").on('click', function(event){
// let form = $("#login").val();

// if (form === password) {
//     $("#admin").html(ad);
// }






 // end of firebase call
}); // end of login on click


