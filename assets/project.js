
//Spoonacular Keys
var searchByRecipeURL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/autocomplete?query='+searchTerm+'&number=10';
var apiKey = "JZgoI18VD1mshWBo98PFcTvqZbMJp1kNIV8jsna2XWGFBVzgIa";
var host = "spoonacular-recipe-food-nutrition-v1.p.mashape.com";
var contentType = "application/x-www-form-urlencoded";


var searchBtn = '#recipeBtn';
var searchTerm = 'chicken';

const RECIPE_NUM = 10;

var searchDetails = function(array){

  for (var i = 0; i < array.length; i++){
    console.log(array[i]);

    $.ajax({type: "GET",
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+array[i]+'/information',
    
    headers: { "X-Mashape-Key": apiKey,
               "X-Mashape-Host": host,
               "Content-Type": contentType  }}).then(function(response){

      console.log(response);
      
      // var tableRef = $('tbody');

      // var tableRow = $('<trow>');

      // var title = response[i].title;
  
    //end ajax function  
    });

  //end for loop
  }
 
//end searchDetails
}

var searchRecipes = function(event){
  //add this thing
  event.preventDefault();

  //also figure out how to make it work when hit enter

  //THIS WON'T PULL MULTIPLE SEARCH TERMS. RESEARCH.
  searchTerm = $('#recipeSearch').val();
  searchByRecipeURL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/autocomplete?query='+searchTerm+'&number=10';
  var saveRecipeIds = [];

  $.ajax({type: "GET",
  url: searchByRecipeURL,
   
  headers: { "X-Mashape-Key": apiKey,
             "X-Mashape-Host": host,
             "Content-Type": contentType }}).then(function(response){
    
    for(var i = 0; i < RECIPE_NUM; i++){
      saveRecipeIds.push(response[i].id);
    }

    //get recipe info
    searchDetails(saveRecipeIds);
  //end ajax
  });

  

//end search recipes
}




//DELETE LATER
console.log("this is running");

$(document).on("click",searchBtn,searchRecipes);