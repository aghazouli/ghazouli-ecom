import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private products;

  constructor(private catalogueService:CatalogueService) { }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts(){
    this.catalogueService.getResource("/products//search/selectedProducts").subscribe(
      data => {
        this.products = data;
      },
      error1 => {
        console.log(error1);
      }
    )
  }

}
