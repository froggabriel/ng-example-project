import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Gabriel\'s Awesome Recipe', 'Just an awesome recipe', 'https://www.maangchi.com/wp-content/uploads/2008/03/dakweb-150x150.jpg',
            [
                new Ingredient('meat', 1),
                new Ingredient('fries', 20)
            ]),
        new Recipe('Gabriel Burger', 'Just an awesome2 Burger', 'https://www.maangchi.com/wp-content/uploads/2008/03/dakweb-150x150.jpg',
            [
                new Ingredient('buns', 2),
                new Ingredient('meat', 2),
                new Ingredient('cheese', 2)
            ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
}