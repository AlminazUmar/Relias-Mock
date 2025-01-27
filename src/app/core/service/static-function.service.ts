import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root',
})

export class StaticFunction{
    constructor (private router:Router){}
    handleClick(path:string){
        this.router.navigate([path])
    }
}