import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class ProductModel {
  Name: string | undefined;
  Description: string | undefined;
  UnitPrice:string|undefined;
  MarkupPrice: string|undefined;
  MaximumQuantity:number|undefined;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit  {
  title = 'Prodoct List';
  baseUrl = environment.baseUrl + 'GetProductsInJson';
  httpOptions = {
    headers: new HttpHeaders({
      'api-key': 'API-KB7R5N2G9DA9EJR'
    })
  };
  productList: ProductModel[] = [];
  constructor(private httpClient: HttpClient) { }
  getProducts(){

    this.httpClient.get<any>(this.baseUrl,this.httpOptions).subscribe(
      response => {
        console.log(response);
        this.productList = response;
      }
    );
  }
  ngOnInit(): void{
    this.getProducts();
  }
}

