# Foodify
###### Assigned: 7/26/18

### Collaborators: 
[@bairdko](https://github.com/bairdko "Me"), [@jv1056](https://github.com/jv1056 "Jeff"),[@uta200105](https://github.com/uta200105 "Jontae"), and [@ChaseB1985](https://github.com/ChaseB1985 "Chase")

### Overview
This app was developed as the first group project during the bootcamp. The guidelines were to make a functional app using at least two APIs and jQuery. Our app uses the Spoonacular API as well as Google Maps. The concept was to create a recipe search app, where you can search by ingredients that you have on hand. If you clicked on a recipe, the app would take the cuisine type of the recipe you pulled up and suggest near by restaurants that offer that same cuisine style. For example, you have tomatos and pasta, so you click on a spaghetti and meatballs recipe, so the app shows you Italian restaurants in the surrounding areas -- just in case you decide that you are too lazy to cook.

#### Responsibilites:
- [@uta200105](https://github.com/uta200105 "Jontae") - HTML/CSS and website design
- [@ChaseB1985](https://github.com/ChaseB1985 "Chase") - HTML/CSS, website design, audio cues.
- [@jv1056](https://github.com/jv1056 "Jeff") - Google Maps API and corresponding functionality
- [@bairdko](https://github.com/bairdko "Me") - Spoonacular API and corresponding functionality


#### Mechanics
- First, you land on a homepage showing pictures of food.
- If you go to the recipe tab, you can search by ingredients list.
- As you search, 10 recipes will pop up on the left side of the screen.
- You can add to your search to narrow down the list of recipes.
- If you click on one to show you the recipe, the ingredients list and instructions appear on the right side with a link to the page the recipe originated on.
- If you click on the restaurants tab, the app has a google map image that shows restaurants near your area.

#### Known Issues:
- If you time out the recipe search or it cannot pull any recipes, there is no error message. The screen will just be perpetually stuck on loading.
- The app will only work if the Google Maps API is hosted locally. At this point in the Bootcamp, we had not learned how to manage the backend server aspect of web development.
- The map does not seem to accurately target restaurants of a specific cuisine type.

#### Potential Improvements:
- The recipe search pulls some strange results. Use different API or retool the parameters to stop the weird recipes from showing up.
- Better integration between the map and the recipe search bar. The connection between them is not apparent in the current UI.
