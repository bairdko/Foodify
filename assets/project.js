
//Spoonacular Keys
var searchByRecipeURL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/autocomplete?query='+searchTerm+'&number=10';
var apiKey = "JZgoI18VD1mshWBo98PFcTvqZbMJp1kNIV8jsna2XWGFBVzgIa";
var host = "spoonacular-recipe-food-nutrition-v1.p.mashape.com";
var contentType = "application/x-www-form-urlencoded";


var searchBtn = '#recipeBtn';
var searchTerm = 'chicken';

const RECIPE_NUM = 10;
var saveRecipeIds = [];

var searchRecipes = function(event){
  //add this thing
  event.preventDefault();

  searchTerm = $('#recipeSearch').val();
  searchByRecipeURL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/autocomplete?query='+searchTerm+'&number=10';
  saveRecipeIds = [];

  $.ajax({type: "GET",
  url: searchByRecipeURL,
   
  headers: { "X-Mashape-Key": apiKey,
             "X-Mashape-Host": host,
             "Content-Type": contentType }}).then(function(response){
    
    
    console.log(response);
    for(var i = 0; i < RECIPE_NUM; i++){
      saveRecipeIds.push(response[i].id);
    }

    console.log(saveRecipeIds);

    // var tableRef = $('tbody');

    // var tableRow = $('<trow>');



  });

 



}




//DELETE LATER
console.log("this is running");

$(document).on("click",searchBtn,searchRecipes);