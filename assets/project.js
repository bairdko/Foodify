var spoonacularURL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/analyzeInstructions';
var apiKey = "JZgoI18VD1mshWBo98PFcTvqZbMJp1kNIV8jsna2XWGFBVzgIa";
var host = "spoonacular-recipe-food-nutrition-v1.p.mashape.com";
var contentType = "application/x-www-form-urlencoded";


$.ajax({type: "POST",
  url: spoonacularURL,
   
  headers: { "X-Mashape-Key": apiKey,
             "X-Mashape-Host": host,
             "Content-Type": contentType },
  data: "instructions=Put the garlic in a pan and then add the onion."}).then(function(response){
    
    
    console.log(response);

});

console.log("this is running");