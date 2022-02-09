import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe!: Recipe;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private recipe_service: RecipeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {

      let recipe_id_str = params.get('recipe_id')
      let recipe_id: number = 0;

      if (recipe_id_str != null) {
        recipe_id = parseInt(recipe_id_str, 10);
      }

      this.recipe_service.getRecipeById(recipe_id)
        .subscribe((recipe) => this.recipe = recipe);
    });
  }

  public goBackButtonClciked() {
    this.location.back();
  }
}
