import { Component } from '@angular/core';
import { ProductService } from "./product.service";
import { products }from "./data.products";
import { PageChangeEvent } from '@progress/kendo-angular-grid';
import { DataResult, SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';


type GridDataResult = DataResult;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})

export class AppComponent {
  title = 'appName';
  
  public gridData: any = products;

  constructor(private service: ProductService) {
    this.loadGridItems();
  }
  public gridItems: Observable<GridDataResult>;

  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number = 0;

  public pageChange(event: PageChangeEvent): void {
      this.skip = event.skip;
      this.loadGridItems();
  }

  public handleSortChange(descriptor: SortDescriptor[]): void {
      this.sortDescriptor = descriptor;
      this.loadGridItems();
  }

  private loadGridItems(): void {
      this.gridItems = this.service.getProducts(
        this.skip,
        this.pageSize,
        this.sortDescriptor,
        this.filterTerm
      );
  }
}
