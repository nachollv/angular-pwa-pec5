import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from '../models/item.interface';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css']
})
export class ComponentDetailComponent implements OnInit {

  item!: Item
  panelOpenState = false;
  
  constructor(
    private itemService: ItemsService,
    private activeRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const itemId:any = this.activeRoute.snapshot.paramMap.get('id') 
    this.itemService.getItemById(itemId)
    .subscribe((item:any)=>
      {
       this.item = item[0]
       this.itemService.getRandomText()
       .subscribe((randomText) =>
          this.item.description = randomText
       )
      }
              )
  }

  homePage() {
    window.history.back()
  }

}
