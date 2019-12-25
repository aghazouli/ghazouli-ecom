import {Component, OnInit} from '@angular/core';
import {CatalogueService} from './catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ghazouli-ecom-front';
  private categories;

  constructor (private cataloguService:CatalogueService){

  }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
      this.cataloguService.getResource("/categories").subscribe(
      data => {
        this.categories = data;
      },
        err => {
        console.log('erreur');
        }
    );
  }
}
