import{Component} from '@angular/core';

//import { Node } from '@angular/compiler';

@Component({
    selector:'activity2',
    templateUrl:'activity2.component.html',
    styleUrls:['./activity2.component.css']

})
export class Activity2Component{
    message:string;
    constructor(){
        this.message="This is from Activity2 Component";
    }

}

