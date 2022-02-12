import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Recipe, RecipesPayload, RecipePayload } from '../model/recipe';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';


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
    
    return this.http.get<RecipePayload>(RECIPE_SERVER + '/v1/recipes/' + recipe_id + '.json')
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log("an error occured", error.error.message);
    } else {
      console.log(JSON.stringify(error, null, 2) +
      `backend return code ${error.status}, ` +
      `body was ${error.error}`  );
    }

    return throwError(error.error);
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
