import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Gabriel\'s Awesome Recipe', 'Just an awesome recipe', 'https://www.maangchi.com/wp-content/uploads/2008/03/dakweb-150x150.jpg'),
    new Recipe('Gabriel\'s Awesome Recipe', 'Just an awesome recipe', 'https://www.maangchi.com/wp-content/uploads/2008/03/dakweb-150x150.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
