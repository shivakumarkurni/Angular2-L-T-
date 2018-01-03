import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PostService {
    constructor(private http: Http) {
    }

    getPosts() {
        return this.http.get('http://mlknights.eastus.cloudapp.azure.com:8080/boeing/uniqueName')
            .map(res => res.json());
    }

    getSupplierData() {
        return this.http.get('http://mlknights.eastus.cloudapp.azure.com:8080/boeing')
            .map(res => res.json())
    }
}