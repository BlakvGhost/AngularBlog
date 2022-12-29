import { Component, OnInit } from '@angular/core';
import { BASE_STORAGE_URL, loading_animate, rewrite_url } from 'src/app/global';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any[];
  storage: string = BASE_STORAGE_URL;
  rewrite: Function = rewrite_url

  constructor(private service: BlogService) { }

  ngOnInit(): void {
    loading_animate(true)
    this.service.getPosts().subscribe(res => (this.posts = res.data.latests.data) && loading_animate(false))
  }

}
