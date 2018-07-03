import { OnInit,Component } from "@angular/core";
import { IMenu } from "src/app/_models/menu";
import { ICategory } from "src/app/_models/category";

@Component({
    selector:'menu',
    templateUrl:'./menu.component.html'
})

export class MenuComponent implements OnInit{
    title='Menu';
    menus:IMenu[]=[];
    category:ICategory={categoryId:1,categoryName:'Beverage'};
    ngOnInit(){
this.menus.push({menuId :1,
                menuName : 'Tea',
menuPrice:5,
menuQuantity : 1,
category:this.category});
    }

    constructor(){
        
    }
}