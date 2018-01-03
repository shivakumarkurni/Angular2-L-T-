import { Component } from '@angular/core';
import { Pipe } from '@angular/core';
import { PostService } from '../services/post.service';

import { Node } from '@angular/compiler';

@Component({
  selector: 'activity1',
  templateUrl: 'activity1.component.html',
  styleUrls: ['./activity1.component.css'],
  providers: [PostService]
})
export class Activity1Component {
  // name: string;
  // age: number;
  // address: address;

  posts: Post[];
  supplierNames = []
  supplierFieldNames = []
  html;
  fields;
  postings: Posting;

  constructor(private postService: PostService) {

    this.html = []
    this.supplierNames;
    this.supplierFieldNames;
    this.fields = ["strengths", "risks", "observations", "recommendations", "awareness"]
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts.UniqueSupplier;
      for (var i = 0; i < this.posts.length; i++) {
        var name = this.posts[i].supplier;
        if (this.html.indexOf(name) == -1)
          this.html.push(name);
      }
      console.log(this.posts);
    });
  }

  supplierData(htmls) {
    this.supplierNames.push(htmls);
  }

  supplierFields(fields) {
    this.supplierFieldNames.push(fields);
  }
  submittingData() {
    var suppName = this.supplierNames;
    var fieldName = this.supplierFieldNames;
    console.log(suppName +" "+ fieldName);
    this.postService.getSupplierData().subscribe(postings => {
    this.postings = postings.SuppliersCompairesion;
    })
  }
}

interface Post {
  field: string;
  supplier: string;
}

interface Posting {

}