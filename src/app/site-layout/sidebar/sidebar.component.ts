import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Category } from '../category';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categoryList: Category;
  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.productsService.getCategory().subscribe(data =>{
      this.categoryList = data;
    })

  }

}
