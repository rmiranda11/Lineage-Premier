

////////////////////////////////////////////////
// Initialize Firebase
////////////////////////////////////////////////
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

//////////////////////////////////////////////////
// Form On Click Event 
//////////////////////////////////////////////////
$("#Submit").on("click",function(event){
    event.preventDefault();
    var nameInput = $("#nameInput").val();
    var emailInput = $("#emailInput").val();
    var messageInput = $("#messageInput").val();
    var deleteRow = ('<button type="button" class="btn btn-danger" id="delete">Delete</button>');


    var newMessage = {
        name: {
        user: nameInput,
        email: emailInput,
        content: messageInput,
        erase:deleteRow        }
    }

    database.ref('Messages').push(newMessage);

    // var getKey =     database.ref('Messages').push(newMessage).key;
    // console.log(getKey);


    alert("Thank you for your message. We will get into contact with you soon!");

    $("#nameInput").val(nameInput);
    $("#emailInput").val(emailInput);
    $("#messageInput").val(messageInput);
});

////////////////////////////////////////////////
// Admin Password check
/////////////////////////////////////////////////
    
    var check = "cole123";
    let ad = (
        '<table id="table" class="table">' +
        '<tbody>' +
        '<tr>' + 
        '<th>Name</th>'+
        '<th>Email </th>'+
        '<th>Message </th>'+
        '</tr>'+
        '</tbody>'+
        '</table>');

$("#send").on('click', function(event){
    let form = $("#login").val();

    if (form === check) {
        $("#admin").html(ad);
    }

   


/////////////////////////////////////////////////////
// Get from Firebase
/////////////////////////////////////////////////////

    database.ref("Messages").on("child_added", function(childSnapshot, prevChildKey) {
        // console.log(childSnapshot.val());
    
        var nameInput = childSnapshot.val().name.user;
        var emailInput = childSnapshot.val().name.email;
        var messageInput = childSnapshot.val().name.content;
        // var deleteRow = childSnapshot.val().name.erase;
        var deleteRow = ('<button type="button" class="btn btn-danger" id="delete">Delete</button>');
        
        var key = childSnapshot.key;
        console.log(key);

     

var newRow = ("<tr id='new'><td>" + nameInput + "</td><td>" + emailInput + "</td><td>" +
messageInput + "</td></tr>")

    $(".btn.btn-danger").attr("newID",key);


    ////////////////////////////////////////////
    // Append to table 
    ////////////////////////////////////////
    $("#table > tbody").append(newRow);
    
    
    // database.ref("Messages").once('value', function(snapshot) {
    //     snapshot.forEach(function(childSnapshot) {
    //       var childKey = childSnapshot.key;
    //       console.log(childKey);
    //       var childData = childSnapshot.val();

       
       
        //   $(".btn.btn-danger").attr("id", key);

    $('#table > tbody').on('click', 'button.btn.btn-danger', function(e) {
        e.stopPropagation();


        $(this).parents('tr').remove();  // removes row from table

        
        
        
        const userID = e.target.getAttribute("newID");
        console.log(userID);
        var dbRef = firebase.database().ref();   

        const userRef = dbRef.child('Messages/' + userID);
        userRef.remove();


//     });
// });
        






        });

});
    ////////////////////////////////////////////////
    // Delete Button
    ///////////////////////////////////////////////
   

});

