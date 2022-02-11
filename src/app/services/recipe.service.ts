import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Recipe, RecipesPayload, RecipePayload } from '../model/recipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const RECIPE_SERVER = 'http://localhost:4200';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  httpOptions: Object;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      header: new HttpHeaders({
        'content-type': 'application/json',
      }),
    };
  }

  getAllRecipes(): Observable<RecipesPayload> {
    return this.http.get<RecipesPayload>(RECIPE_SERVER + '/v1/recipes.json');
  }

  getRecipeById(recipe_id: number): Observable<RecipePayload> {
    if(recipe_id === undefined){
      console.log('Ops thats an error');
      return new Observable();
    }
    
    return this.http.get<RecipePayload>(RECIPE_SERVER + '/v1/recipes/' + recipe_id + '.json');
  }

  addRecipe(recipe: Recipe): Observable<RecipePayload> {
    return this.http.put<RecipePayload>(RECIPE_SERVER + '/v1/recipes.json', recipe,  this.httpOptions);
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
