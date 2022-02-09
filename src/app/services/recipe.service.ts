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
        'ingredients': [{ 'ingredient': 'Yogurt', 'measure': '2 cup' }],
        'instructions': [{ 'instruction': 'Add tea spoon salt in the yogurt', 'photo': '' }],
        'cover_photo': '/assets/indori_chaat.jpeg',
        'keywords': []
      }),
      Recipe.recipeFromJson({
        'id': 2,
        'title': 'Jalebi',
        'desc': 'This is my fav sweets',
        'feed_this_many': 4,
        'preparation_time': 30,
        'ingredients': [{ 'ingredient': 'Yogurt', 'measure': '2 cup' }],
        'instructions': [{ 'instruction': 'Add tea spoon salt in the yogurt', 'photo': '' }],
        'cover_photo': '/assets/jalebi.jpeg',
        'keywords': []
      })
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


}
