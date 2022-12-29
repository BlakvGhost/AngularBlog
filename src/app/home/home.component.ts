import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog/blog.service';
import { BASE_STORAGE_URL, rewrite_url, loading_animate } from '../global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  posts: any[];
  storage: string = BASE_STORAGE_URL;
  rewrite: Function = rewrite_url

  constructor(private service: BlogService) { }

  ngOnInit(): void {
    loading_animate(true)
    this.service.getPosts().subscribe(res => (this.posts = res.data.latests.data) && loading_animate(false));
  }

}
