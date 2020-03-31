import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../catalogue.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private products;
  private editPhoto : boolean;
  private currentProduct :any;
  private selectedFiles;
  private progress :number;
  private currentFileUpload :any;

  constructor(private catalogueService:CatalogueService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        let url = val.url;
        console.log(url);

     let p1=this.route.snapshot.params.p1;
     if(p1==1){
       this.getProducts('/products/search/selectedProducts');
     } else if (p1==2){
       let idCat=this.route.snapshot.params.p2;
       this.getProducts('/categories/'+idCat+'/products/')
     }
      }
    });
  }

  uploadPhoto(){

    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);

    this.catalogueService.uploadPhotoProduct(this.currentFileUpload,


      this.currentProduct.id).subscribe( event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          alert("fin du téléchargement....")
        }
      },
    err => {
        alert("Problème de chargement ");
      });
    this.selectedFiles = undefined;

    }




   getProducts(url){
    this.catalogueService.getResource(url)
      .subscribe(
      data => {
        this.products = data;
      },
      error1 => {
        console.log(error1);
      }
    )
  }
  onEditPhoto(p) {
    this.currentProduct = p;
    this.editPhoto = true;
  }




  onSelectedFile(event){
    this.selectedFiles = event.target.files;
  }

}
