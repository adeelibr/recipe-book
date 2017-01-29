import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Spagheti', 'Noodles, Meatballs', 'http://thumbs2.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected (recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
