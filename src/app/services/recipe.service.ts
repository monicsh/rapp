import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Recipe, RecipesPayload } from '../model/recipe';
import { HttpClient } from '@angular/common/http';

const RECIPE_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {}

  getAllRecipes(): Observable<RecipesPayload> {
    return this.http.get<RecipesPayload>(RECIPE_SERVER + '/v1/recipes.json');
  }

  getRecipeById(recipe_id: number): Observable<Recipe> {
    return new Observable();
  }

  addRecipe(recipe: Recipe): number {
    // const new_recipe_id = this.getNewRecipeId();
    // recipe.id = new_recipe_id;

    // this.recipes.push(recipe);

    // return new_recipe_id;
    return -1;
  }

  // getNewRecipeId(): number {
  //   let max = 0;

  //   for( const recipe of this.recipes){
  //     if(recipe.id > max){
  //       max = recipe.id;
  //     }
  //   }

  //   return max + 1;
  // }

}
