var diet = ("<div class = 'diet main container'>" + 
"<h2 class='mx-3 justify-content-sm-center'>Lineage Diet</h2>" +
'<div class="container">' +

'<div class="row media">' +
    '<div class="par diet-txt col-sm d-flex justify-content-sm-start align-items-center">'+
            '<p class="diet-txt">We believe in fresh, natural, ' +
            'butchered and whole prey for our meat only. We\'ve partnered with thousands of local butchers, ' +
            'farmers\' market vendors and small grocery stores to supply the freshest ingredients. ' +
            'The entire family (your pup included) will see how easily the switch to a Lineage Diet will cause immediate changes in your canine.<b> Health is wealth.</b></p>' +
    '</div>'+
    '<img class="align-self-center mr-3 food" src="./Images/food2.jpg">'+

'</div><hr>'+

'<div class="row media justify-content-sm-center align-items-center">'+
    '<img class = "mr-6 d-flex justify-content-sm-center circle" src="./Images/bubbles2.png">    '+
'</div> '+
'<hr>' +
'<div class="row media">'+
    '<div class="par col-sm d-flex justify-content-sm-start align-items-center"><h2>BE SURE TO ALWAYS REMOVE SEEDS AND PITS OF FRUITS</h2>'+
    '<img class="align-self-center mr-3" src="./Images/exclaim.png">'+
    '</div>'+
'</div>'+
'</div>')

var intro =("<div class = 'diet main container row'>" +
    "<div main class ='d-flex justify-content-center intro container'>" + 
    "<p class='introduction d-flex mb-2 '> We are Lineage Premier, advocates and educators on all natural diets for your beloved canines. Here we will provide information and services to help make the transition seamless! For those who already feed their canines a raw diet we would love to work with you! We hope you enjoy our website and hope to hear from you soon!</p>" +
    "</div> <br> <br> <br> <br> <hr><div><br><br></div> "  +
    "<div class='embed-responsive embed-responsive-21by9 justify-content-center row vid'>" +
        "<iframe width='560' height='315' class='justify-content-center' src='https://www.youtube.com/embed/vpsmFriUyBc' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>" +
        "</div>" +
"</div>")

var consult = ("<div class = 'consult main container'>" + 
"<div class='row member'>" +
"<h2 class='my-2 justify-content-sm-center'>Membership</h2>" +
'<div class="container"><div class="row d-flex justify-content-sm-center">' +
            '<div class="col-sm-3 card d-flex align-items-center  border-primary mx-3 my-3" style="width: 18rem;">'+
                    '<div class="card-header text-white bg-primary">Basic</div>'+
                    '<div class="card-body">'+
                      '<h5 class="card-title"></h5>'+
                      '<h6 class="card-subtitle mb-2 text-muted">Month-to-month</h6>'+
                      '<p class="card-text text-dark">-$20<br>'+
                          '-Step-by-step Meal Plan<br>'+
                          '-24 Hour Customer Support</p></div></div>'+
                  '<div class="col-sm-3 card d-flex align-items-center border-info mx-3 my-3" style="width: 18rem;">'+
                        '<div class="card-header text-white bg-secondary">Silver</div>'+
                        '<div class="card-body">'+
                          '<h5 class="card-title"></h5>'+
                          '<h6 class="card-subtitle mb-2 text-muted">Semi-annually</h6>'+
                          '<p class="card-text text-dark">-$80<br>'+
                              '-Step-by-step Meal Plan<br>'+
                              '-24 Hour Customer Support<br>'+
                              '-Treats & toys Pack</p></div></div>'+
                      '<div class="col-sm-3 card d-flex align-items-center border-warning mx-3 my-3 " style="width: 18rem;">'+
                            '<div class="card-header text-white bg-warning">Gold</div>'+
                            '<div class="card-body">'+
                              '<h5 class="card-title"></h5>'+
                              '<h6 class="card-subtitle mb-2 text-muted">Annual</h6>'+
                              '<p class="card-text text-dark">-$180<br>'+
                                  '-Step-by-step Meal Plan<br>'+
                                  '-24 Hour Customer Support<br>'+
                                  '-Treats & Toys Pack<br>'+
                                  '-Featured Pup on Youtube <br>'+
                                  '-Free entry into Monthly Raffle</p></div></div></div>'+
    '<div class="my-5 d-flex justify-content-sm-center">'+
            '<a class="btn btn-danger btn-lg" href="./contact.html" role="button">REGISTER NOW >></a>'+
    '</div></div>')

var lulu = ("<img class='dog justify-content-center' src='./Images/lulu.jpg' alt='lulu'>");
var sheba = ("<img class='dog sheba justify-content-center' src='./Images/Sheba.jpg' alt='sheba'>");
var nana = ("<img class='dog justify-content-center' src='./Images/nana.jpg' alt='nana'>");
var pops = ("<img class='dog d-flex justify-content-center' src='./Images/pops.jpg' alt='pops'>");


$(document).ready(function(){
    $('#diet').on('click', function(event) {        
         $("#main").html(diet);
        //  $('#main').toggle('show');
    });
});


$('#intro').on('click', function(event) {        
    $("#main").html(intro);
});

$('#consult').on('click', function(event) {        
    $("#main").html(consult);
});


// Dog Buttons ------------------------------------------

$('#lulu').on('click', function(event) {        
    $("#dog-div").html(lulu);
});
$('#sheba').on('click', function(event) {        
    $("#dog-div").html(sheba);
});
$('#pops').on('click', function(event) {        
    $("#dog-div").html(pops);
});
$('#nana').on('click', function(event) {        
    $("#dog-div").html(nana);
});


/////////////// Register Button
$('#register-btn').on('click', function(event) {        
    window.location.href = './contact.html'
});