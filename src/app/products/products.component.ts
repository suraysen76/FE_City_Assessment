import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class Product {
  Name: string | undefined;
  Description: string | undefined;
  MarkupPrice: string|undefined;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit  {
  httpOptions = {
    headers: new HttpHeaders({
      'api-key': 'API-KB7R5N2G9DA9EJR'
    })
  };
  productList: Product[] = [];
  constructor(private httpClient: HttpClient) { }
  getProducts(){

    this.httpClient.get<any>('https://localhost:44339/Products/GetProductsInJson',this.httpOptions).subscribe(
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

