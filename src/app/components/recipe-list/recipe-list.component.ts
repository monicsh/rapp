import { Component } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  current_css_style = {
    color: 'red'
  }
  current_css_classes = {
    darkbg: false
  };

  recipes: Recipe[];

  recipe_in_progress: Recipe;

  constructor(private router: Router) {

    this.recipe_in_progress = Recipe.createBlank();
    
    this.recipes = [
      Recipe.recipeFromJson({
        'id': 1,
        'title': 'Indori Chaat',
        'desc': 'Yummieee...',
        'feed_this_many': 4,
        'preparation_time': 60,
        'ingredients': [{'ingredient': 'Yogurt', 'measure': '2 cup'}],
        'instructions': [{'instruction': 'Add tea spoon salt in the yogurt', 'photo': ''}],
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
      // new Recipe(1, 'Indori Chaat', 'Yummieee...', 4, 60, [], [], '/assets/indori_chaat.jpeg', []),
      // new Recipe(2, 'Jalebi', 'This is my fav sweets', 4, 30, [],[], '/assets/jalebi.jpeg', []),
      // new Recipe(3, 'Rasmalai', 'Lunch Time...its rasmalai time', 2, 60, [], [],'/assets/rasamalai.jpg', []),
      // new Recipe(4, 'Creme Brulee', 'Benus fav', 6, 40, [], [], '/assets/brulee.jpeg', []),
      // new Recipe(5, 'Khamand', 'Gujarati dish ', 6, 30, [], [], '', [])
    
  }

  public addRecipeClicked(){
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
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
}
