
//Spoonacular Keys
var searchByRecipeURL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/autocomplete?query='+searchTerm+'&number=10';
var apiKey = "JZgoI18VD1mshWBo98PFcTvqZbMJp1kNIV8jsna2XWGFBVzgIa";
var host = "spoonacular-recipe-food-nutrition-v1.p.mashape.com";
var contentType = "application/x-www-form-urlencoded";


var searchTerm = 'chicken';

const RECIPE_NUM = 10;
var saveResults = [];

//this outputs at most 10 recipes to a table
var searchDetails = function(array1,array2){

  let tableRef = $('tbody');
  tableRef.empty();

  for (let i = 0; i < array1.length; i++){

    $.ajax({type: "GET",
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+array1[i]+'/information',
    
    headers: { "X-Mashape-Key": apiKey,
               "X-Mashape-Host": host,
               "Content-Type": contentType  }}).then(function(response){

      array2.push(response);

      let tableRow = $('<tr>');
      let title = response.title;

      // MAYBE CONSIDER A TIME CONVERTER
      let timeNeeded = response.readyInMinutes;
      if (response.preparationMinutes){
        timeNeeded = response.preparationMinutes + response.readyInMinutes;
      }

      let popularity = response.spoonacularScore;

      tableRow.append('<td>'+title+'</td>');
      tableRow.append('<td>'+timeNeeded + ' minutes' +'</td>');
      tableRow.append('<td>'+popularity + '% popularity'+'</td>');
      tableRow.append('<td><button class = "btn btn-dark text-white recipeBtn" value = "' + response.id + '">View Recipe</button></td>');
      tableRef.append(tableRow);
  
    //end ajax function  
    });

  //end for loop
  }
 
//end searchDetails
}



//This function searches for recipes based on what was typed in the search bar
var searchRecipes = function(event){
  //add this thing
  event.preventDefault();

  //also figure out how to make it work when hit enter


  //THIS WON'T PULL MULTIPLE SEARCH TERMS. RESEARCH.
  searchTerm = $('#recipeInput').val();
  searchByRecipeURL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/autocomplete?query='+searchTerm+'&number=10';
  var saveRecipeIds = [];
  saveResults = [];


  $.ajax({type: "GET",
  url: searchByRecipeURL,
   
  headers: { "X-Mashape-Key": apiKey,
             "X-Mashape-Host": host,
             "Content-Type": contentType }}).then(function(response){
    
    for(var i = 0; i < RECIPE_NUM; i++){
      saveRecipeIds.push(response[i].id);
    }

    //get recipe info
    searchDetails(saveRecipeIds,saveResults);

    console.log(saveResults);
  //end ajax
  });

  

//end search recipes
}

//This pulls the recipe on click of recipe
var createRecipeCard = function(event){
  event.preventDefault;

  // var arrayNum = $(this).val();
  // console.array(arrayNum);

  //empty the location
  var location = $('#recipe-card');
  location.empty();

  //get recipe chosen variable
  var recipeChosen;
  var idValue = $(this).val();
  idValue = parseInt(idValue);

  //pull recipe info
  for (var i = 0; i < saveResults.length; i++){

    if(saveResults[i].id === idValue){
      recipeChosen = saveResults[i];
    }
    
  }

  console.log(recipeChosen);
  
  //create container
  var createContainer = $('<div>');
  createContainer.attr('class','container');
  createContainer.attr('id','recipeCard');

  //create row1
  var createRow1 = $('<div>');
  createRow1.attr('class','row');

  //create title
  var title = $('<h2>' + recipeChosen.title + '</h2>');
  
  //add title to row to container
  location.append(createContainer);
  createContainer.append(createRow1);
  createRow1.append(title);

  //get prep time
  var prepTime = 0;
  if(recipeChosen.preparationMinutes){
    prepTime = recipeChosen.preparationMinutes;
  }

  //create row2
  var createRow2 = $('<div>');
  createRow2.attr('class','row');
  

  //create time desc
  var timeDescription = $('<h6> Prep Time: ' + prepTime +' minutes' + 
  ', '
  + 'Cook Time: ' + recipeChosen.readyInMinutes + ' minutes </h6>');
  timeDescription.attr('id','timeDesc');

  createContainer.append(createRow2);
  createRow2.append(timeDescription);

  //create Image
  var foodImage = $('<img src="'+recipeChosen.image+'"/>');
  foodImage.attr('class','foodImage');
  foodImage.css('max-width','300px');
  foodImage.css('width','50%');
  foodImage.css('height','50%');

  //create row3
  var createRow3 = $('<div>');
  createRow3.attr('class','row');

  //attach image
  createContainer.append(createRow3);
  createRow3.append(foodImage);

  //create ingredients list
  var ingredientList = $('<ul>');

  //add ingredients
  for (var i = 0; i < recipeChosen.extendedIngredients.length; i++){
    var listItem = $('<li>'+recipeChosen.extendedIngredients[i].name+'</li>');
    ingredientList.append(listItem);
  }

  //append lists
  createRow3.append(ingredientList);

  //create row4
  var createRow4 = $('<div>');
  createRow4.attr('class','row');

  //check for null instructions
  var instructions = recipeChosen.instructions;
  if(instructions === null){
    instructions = "No directions available! Whoops!"
  }

  //create directions
  var directions = $('<p id = "directions"><strong></em>Directions: </em></strong>' + instructions + '</p>');

  //append directions
  createRow4.append(directions);
  createContainer.append(createRow4);

  var paddingRow = $('<div>');
  paddingRow.attr('class')

  //create row5
  var createRow5 = $('<div>');
  createRow5.attr('class','row');

  //create button to go to website
  var link = $('<a>Go To Website</a>');
  link.attr('href',recipeChosen.sourceUrl);
  link.attr('target','_blank');
  link.attr('class','btn btn-dark text-white');
  link.attr('id','websiteButton');

  //append button
  createRow5.append(link);
  createContainer.append(createRow5);

}


//search on click
$(document).on("click",'#recipeButton',searchRecipes);

//search on enter
$(document).on("keyup",function(event){
  if (event.which === 13)
     searchRecipes(event);
});

//pull recipes
$(document).on("click",'.recipeBtn',createRecipeCard);