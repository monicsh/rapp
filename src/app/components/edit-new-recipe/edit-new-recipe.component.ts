import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {

  recipe_in_progress: Recipe;
  constructor(private router: Router, 
    private recipe_service: RecipeService) {
    this.recipe_in_progress = Recipe.createBlank();
   }

  ngOnInit(): void {}

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

  public addInstructionPressed(): void{
    if(!this.recipe_in_progress.ingredients){
      this.recipe_in_progress.instructions = [{ 'instruction': '', 'photo': ''}];
    } else {
      this.recipe_in_progress.instructions.push({ 'instruction': '', 'photo': ''});
    }
  }

  public removeInstructionAtIndex(i: number): void {
    this.recipe_in_progress.instructions.splice(i, 1);
  }

  public addRecipeClicked(): void{
    const recipe_id = this.recipe_service.addRecipe(this.recipe_in_progress);
    this.router.navigate(['/recipes', recipe_id]);
    // console.log(JSON.stringify(this.recipe_in_progress, null, 2));

    // this.recipes.unshift(this.recipe_in_progress);
    // this.recipe_in_progress = Recipe.createBlank();
  }

}
