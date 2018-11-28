import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from '../album';
import { Http } from '@angular/http';



@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo: Album;

  constructor(private _productService: ProductService, private _http: Http) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => 
      this.albumInfo = response);

  }

}
