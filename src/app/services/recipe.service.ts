import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[];
  constructor() {

    this.recipes = [
      Recipe.recipeFromJson({
        'id': 1,
        'title': 'Indori Chaat',
        'desc': 'Yummieee...',
        'feed_this_many': 4,
        'preparation_time': 60,
        'ingredients': [
            {'ingredient': 'Yogurt', 'measure': '1/2 cup'},
            {'ingredient': 'salt', 'measure': '1/2 tsp'},
            {'ingredient': 'sugar', 'measure': '1 tsp'},
            {'ingredient': 'red pepper', 'measure': '1 tsp'},
            {'ingredient': 'black pepper', 'measure': '1 tsp'},
            {'ingredient': 'chaat masala', 'measure': '1 tsp'},
            {'ingredient': 'papadi', 'measure': ' 200 gm'},
            {'ingredient': 'Imali Chatney', 'measure': '1/4 cup'},
            {'ingredient': 'Green Chatney', 'measure': '1/4 cup'},
            {'ingredient': 'Celentro chopped', 'measure': ' 1/2 cup'},
            {'ingredient': 'Hair sev', 'measure': '1/2 cup'},
          ],
        'instructions': [
          {'instruction': 'firstly, in a serving plate take 13 papdi. to prepare homemade papdi using wheat flour check out my papdi recipe.', 'photo': ''},
          {'instruction': 'top with 3 tbsp potato and 3 tbsp chickpea.', 'photo': ''},
          {'instruction': 'sprinkle 2 tbsp of chopped onions.', 'photo': ''},
          {'instruction': 'take 3 tbsp of whisked curd and drizzle over it.', 'photo': ''},
          {'instruction': 'add 2 tsp of green chutney and 2 tsp of tamarind chutney.', 'photo': ''},
          {'instruction': 'now add 1 tbsp of more curd, 1 tsp green chutney and 1 tsp tamarind chutney', 'photo': ''},
          {'instruction': 'top with 3 tbsp sev and garnish with 1 tsp coriander.', 'photo': ''},
        ],
        'cover_photo': '/assets/indori_chaat.jpeg',
        'keywords': []
      }),
      Recipe.recipeFromJson( {
        'id': 2,
        'title': 'Jalebi',
        'desc': 'This is my fav sweets',
        'feed_this_many': 4,
        'preparation_time': 30,
        'ingredients': [{'ingredient': 'Yogurt', 'measure': '2 cup'}],
        'instructions': [{'instruction': 'Add tea spoon salt in the yogurt', 'photo': ''}],
        'cover_photo': '/assets/jalebi.jpeg',
        'keywords': []
      },)
    ];
    // new Recipe(3, 'Rasmalai', 'Lunch Time...its rasmalai time', 2, 60, [], [],'/assets/rasamalai.jpg', []),
    // new Recipe(4, 'Creme Brulee', 'Benus fav', 6, 40, [], [], '/assets/brulee.jpeg', []),
    // new Recipe(5, 'Khamand', 'Gujarati dish ', 6, 30, [], [], '', [])

  }

  getAllRecipes(): Observable<Recipe []> {
    return new Observable<Recipe []>((obserable) => {
      obserable.next(this.recipes);
      obserable.complete();
    });
  }

  getRecipeById(recipe_id: number): Observable<Recipe> {
    return new Observable<Recipe>((obserable) => {
      for(let recipe of this.recipes){
        if(recipe.id === recipe_id){
          obserable.next(recipe);
          obserable.complete();
          return;
        }
      }

      console.log("OPS cant find given recipe_id " + recipe_id);
    });
  }


}
