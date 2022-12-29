import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService, Category } from '../blog.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styles: [
  ]
})
export class ShareComponent implements OnInit {

  message: string|boolean = false;
  success: boolean;
  categories: Category[];
  data: Blog = new Blog();

  constructor(private service: BlogService) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe( res => this.categories = res.data)
  }

  submit(event: any) {
    const target: HTMLFormElement = event.target;
    
    if (!target.reportValidity()) {
      this.message = `Erreur, veillez remplir tout les champs`;
      return this.success = !1;
    }
    
    let data = new FormData(target);

    this.success = true;
    this.message = `Tentative de publication du post en cours...`;
    
    return this.service.createPost(data).subscribe( res => {
      this.success = res.success;
      this.message = res.message;
    });
  }

}
