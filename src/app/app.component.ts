import { Component } from '@angular/core';
import { ItemsService } from './servicio/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
   items: any;

  constructor(public itemsService: ItemsService){
  this.itemsService.getitems().subscribe(rest=>{
  this.items = rest.result.items;
  console.log(JSON.stringify(this.items));
  });
 
  }
}
