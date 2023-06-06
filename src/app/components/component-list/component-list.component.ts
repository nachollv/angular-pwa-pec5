import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from '../models/item.interface';
@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],

})
export class ComponentListComponent implements OnInit {

  constructor(private itemService: ItemsService) {}
  items!: Item[];
  isGridView: boolean = true

  columnsDisplayed = ['title', 'thumbnail', 'action'];

  ngOnInit(): void {

    this.itemService.getAllItems()
    .subscribe((items:any)=>
    this.items = items
              )

  }

  gridViewType(isGrid: boolean) {
    this.isGridView = isGrid
    console.log(this.isGridView)
  }

}
