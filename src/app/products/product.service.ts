import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Category } from  '../site-layout/category';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  createProduct(productBody):Observable<Product>{
  	const baseUrl="http://localhost:3000/products";
  	return this.httpClient.post<Product>(baseUrl,productBody);
  }

  viewProduct():Observable<Product>{
  	const baseUrl="http://localhost:3000/product/";
  	return this.httpClient.get<Product>(baseUrl);
  }

  updateProduct(productId,productBody):Observable<Product>{
  	const baseUrl="http://localhost:3000/product/"+productId;
  	return this.httpClient.put<Product>(baseUrl,productBody);
  }

  deleteProduct(productId,productBody):Observable<Product>{
  	const baseUrl="http://localhost:3000/product/"+productId;
  	return this.httpClient.delete<Product>(baseUrl);
  }

  searchCategoryProduct(categoryId):Observable<Product>{
    const baseUrl="http://localhost:3000/product?categoryId="+categoryId;
    return this.httpClient.get<Product>(baseUrl);
  }
  searchDateProduct(dateParam):Observable<Product>{
  	const baseUrl="http://localhost:3000/product/date="+dateParam;
  	return this.httpClient.get<Product>(baseUrl);
  }
  getCategory(){
    const categoryUrl="http://localhost:3000/categories";
    return this.httpClient.get<Category>(categoryUrl);
  }
}
