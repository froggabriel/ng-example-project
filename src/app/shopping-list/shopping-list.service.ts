import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice()); //emit copy of ingredients
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients); //... operator spreads array into list
        this.ingredientsChanged.emit(this.ingredients.slice()); //emit copy of ingredients
    }
}