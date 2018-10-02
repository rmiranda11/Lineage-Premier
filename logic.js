var diet = ("<div class = 'diet container'>" + 
"<h2>Lineage Diet</h2>" +
"<div class= 'd-flex flex-row'>" +
"<img class='d-flex p-2' src='./tuxpi.com.1538438727.jpg' alt='food'>" +
"<img class='d-flex p-2' src='./food_1.jpg' alt='food'></div>" +
"<p> 85% Meat: Majority should be Poultry. <br>" + 
"10% Vegetables of the following: Broccoli Heads, Brussel Sprouts, Carrots, Celery Cucumbers," +
" Green Beans, and Peas. <br>" + 
"5% Fruit of the following: Apples, Bananas, Blueberries, Cherries, Mangos, Oranges, Peaches, " +
"Pears, and Watermelon. <br>" + 
"<b>BE SURE TO ALWAYS REMOVE SEEDS AND PITS OF FRUITS!</b><br> <br>" +
"<b>NEVER FEED YOUR CANINE ANYTHING CANNED!!!</b> Here at Lineage Premier we believe in fresh, natural," + 
" butchered and whole prey for our meat only. We partner with thousands of local butchers, "+
"farmers' market vendors and small grocery stores to supply the freshest ingredients. "+
"The entire family (your pup included) will see how easily the switch to a Lineage Diet will cause immediate changes in your canine. Health is wealth.</p></div>");

var intro = ("<div class ='d-flex justify-content-center intro container'>" + 
"<iframe width='560' height='315' src='https://www.youtube.com/embed/vpsmFriUyBc' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")

var consult = ("<div class = 'consult container'>" + 
"<h2>So, how do I get it?</h2>" +
// "<div class= 'd-flex flex-row'>" +
// "<img class='d-flex p-2' src='./tuxpi.com.1538438727.jpg' alt='food'>" +
// "<img class='d-flex p-2' src='./food_1.jpg' alt='food'></div>" +
"<p> We offer 3 types of plans per canine: <br>" + 
"Monthly - $20 <br>" + 
"Semi-yearly - $80 <br>" + 
"Yearly - $180 <br> <br>" +
"The service includes getting as much information on the canine then formulating their lineage diet in a simple step by step meal plan, locations of the nearest butchers and fresh markets in your area, and 24 hour customer service for any questions the client may have. Those who order 6 month and year subscriptions will receive a package of all natural treats, info and toys. Yearly subscribers will have their pup featured on our youtube channel also are entered into our monthly raffle of a free monthly meal plan. ")



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