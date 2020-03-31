import {Component, OnInit} from '@angular/core';
import {CatalogueService} from './catalogue.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ghazouli-ecom-front';
  private categories;
  private currentCategories;

  constructor (private cataloguService:CatalogueService,
               private router:Router){

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

   getProductsByCat(c){
     this.currentCategories = c;
     this.router.navigateByUrl('/products/2/'+c.id);
  }

  onSelectedProduct() {
    this.currentCategories = undefined;
    this.router.navigateByUrl('/products/1/0');
  }
}
