import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {

  recipe_in_progress: Recipe;
  constructor() {
    this.recipe_in_progress = Recipe.createBlank();
   }

  ngOnInit(): void {
  }

  public addRecipeClicked(): void{

  }

   // public addRecipeClicked(){
  //   console.log(JSON.stringify(this.recipe_in_progress, null, 2));
  //   this.recipes.unshift(this.recipe_in_progress);
  //   this.recipe_in_progress = Recipe.createBlank();
  // }

  public addIngredientPressed(): void{
    if(!this.recipe_in_progress.ingredients){
      this.recipe_in_progress.ingredients = [{ 'ingredient': '', 'measure': ''}];
    } else {
      this.recipe_in_progress.ingredients.push({ 'ingredient': '', 'measure': ''});
    }
  }

  public removeIngredientAtIndex(i: number): void {
this.recipe_in_progress.ingredients.splice(i, 1);
  }

}
