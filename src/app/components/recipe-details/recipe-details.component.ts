import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe!: Recipe;
  recipes: Recipe[];

  constructor(private route: ActivatedRoute) {

    
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
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      
      let recipe_id = params.get('recipe_id')
      let recipe_id_num: number = 0;

      if(recipe_id != null){
        recipe_id_num = parseInt(recipe_id, 10);
      }
        
      this.recipe = this.findRecipeById(recipe_id_num);
     
      // this.recipe = this.findRecipeById(parseInt(params.get('recipe_id'), 10));
      console.log(" HERE IS THE JSON: \n",JSON.stringify(this.recipe, null, 2));
    });
  }

  findRecipeById(recipe_id: number): Recipe {
    for(const recipe of this.recipes){
      if(recipe.id === recipe_id){
        return recipe;
      }
    }
  
    return new Recipe(-1, '', '', 1, 1, [], [], '', []);
  }

}
