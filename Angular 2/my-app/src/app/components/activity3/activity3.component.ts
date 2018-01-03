import { Component} from '@angular/core';

@Component({
    selector:'activity3',
    templateUrl:'activity3.component.html',
    styleUrls:['./activity3.component.css']

  
})

export class Activity3Component{

    message:string;

    constructor(){
        this.message="This is from Activity3";
    }
    
}