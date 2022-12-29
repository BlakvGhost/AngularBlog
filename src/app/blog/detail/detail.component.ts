import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BASE_STORAGE_URL, loading_animate } from 'src/app/global';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  storage = BASE_STORAGE_URL;
  post: any;

  constructor(
    private service: BlogService,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {
    loading_animate(true);
    let id: number = Number(this.router.snapshot.paramMap.get('id'));
    this.service.getPost(id).subscribe( res => {
      this.post = res.data.post;
      loading_animate(false);
    })
  }

}
