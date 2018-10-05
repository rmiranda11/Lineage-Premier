var diet = ("<div class = 'diet main container'>" + 
"<h2>Lineage Diet</h2>" +
"<div class= 'row container'>" +
"<img class='col-md-4 pic img-fluid  p-2' src='./tuxpi.com.1538438727.jpg' alt='food'>" +
"<img class='col-md-4 pic img-fluid  p-2' src='./food_1.jpg' alt='food'></div>" +
"<p> 85% Meat: Majority should be Poultry with a raw egg with or without the shell. <br>" + 
"10% Vegetables of the following: Broccoli Heads, Brussel Sprouts, Carrots, Celery Cucumbers," +
" Green Beans, and Peas. <br>" + 
"5% Fruit of the following: Apples, Bananas, Blueberries, Cherries, Mangos, Oranges, Peaches, " +
"Pears, and Watermelon. <br>" + 
"<b>BE SURE TO ALWAYS REMOVE SEEDS AND PITS OF FRUITS!</b><br> <br>" +
"<b>NEVER FEED YOUR CANINE ANYTHING CANNED!!!</b> Here at Lineage Premier we believe in fresh, natural," + 
" butchered and whole prey for our meat only. We partner with thousands of local butchers, "+
"farmers' market vendors and small grocery stores to supply the freshest ingredients. "+
"The entire family (your pup included) will see how easily the switch to a Lineage Diet will cause immediate changes in your canine. Health is wealth.</p></div>");

var intro = ("<div class = 'diet main container'><div main class ='d-flex justify-content-center intro container'>" + 
"<p class='introduction row'> We are Lineage Premier, advocates and educators on all natural diets for your beloved canines. Here we will provide information and services to help make the transition seamless! For those who already feed their canines a raw diet we would love to work with you! We hope you enjoy our website and hope to hear from you soon!</p>" +
"<iframe width='560' height='315' class='vid row' src='https://www.youtube.com/embed/vpsmFriUyBc' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div></div>")

var consult = ("<div class = 'consult main container'>" + 
"<div class='row'>" +
"<h2>Membership</h2>" +
"<div class=''>"+
// "<img class='d-flex justify-content-end' src='' alt='member'> </div>" +
"<p class=> We offer 3 types of plans per canine: <br>" + 
"Basic - Monthly - $20 <br>" + 
"Silver - Semi-annual - $80 <br>" + 
"Gold - Annual - $180 <br> <br>" +
"The service includes getting as much information on the canine then formulating their lineage diet in a simple step by step meal plan, locations of the nearest butchers and fresh markets in your area, and 24 hour customer service for any questions the client may have. Those who order 6 month and year subscriptions will receive a package of all natural treats, info and toys. Yearly subscribers will have their pup featured on our youtube channel also are entered into our monthly raffle of a free monthly meal plan. " +
"</div> </div>")

var lulu = ("<img class='dog' src='./lulu.jpg' alt='lulu'>");
var sheba = ("<img class='dog' src='./Sheba.jpg' alt='sheba'>");
var nana = ("<img class='dog' src='./nana.jpg' alt='nana'>");
var pops = ("<img class='dog' src='./pops.jpg' alt='pops'>");


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

