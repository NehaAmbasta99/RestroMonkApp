import { OnInit,Component } from "@angular/core";

@Component({
    selector:'user',
    templateUrl:'./user.component.html'
})

export class UserComponent implements OnInit{
    title='User';
    ngOnInit(){

    }

    constructor(){
        
    }
}