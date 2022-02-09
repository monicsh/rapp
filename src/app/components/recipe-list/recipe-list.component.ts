import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  current_css_style = {
    color: 'red'
  }
  current_css_classes = {
    darkbg: false
  };

  recipes!: Recipe[];

  constructor(private router: Router, private recipe_service: RecipeService) { }

  ngOnInit(){
    this.recipe_service.getAllRecipes()
    .subscribe((recipes) => this.recipes = recipes);
  }

  public recipeZoomedIn(recipe: Recipe): void {
    console.log('The user clicked on the recipe');
    console.log(JSON.stringify(recipe, null, 2));
  }

  public toggleDarkBackground(): void{
      this.current_css_classes.darkbg = !this.current_css_classes.darkbg;
  }

  public toggleTitlecolor(): void {
    if(this.current_css_style.color === 'red'){
      this.current_css_style.color = 'black';
    } else{
      this.current_css_style.color = 'red';
    }
  }

  public recipeClicked(recipe_id: number): void{
    console.log("i got recipe ID : ", recipe_id);
    this.router.navigateByUrl('/recipes/' + recipe_id);
  }

  public addNewRecipe(): void {
    this.router.navigateByUrl('editnewrecipe');
  }
}
