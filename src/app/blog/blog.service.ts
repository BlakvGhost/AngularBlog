import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BlogService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {    
    return this.http.get<any>('category')
  }
  getPosts(): Observable<any> {
    return this.http.get<any>('blog-info')
  }
  getPost(id: number): Observable<any> {
    return this.http.get<any>(`blog-detail/${id}`)
  }
  createPost(post: any): Observable<any> {
    return  this.http.post<any>('blog',
     post).pipe(
      tap( res => {
        console.log(res.data);        
      }),
      catchError( error => {
        console.error(error);
        return of();
      })
      )
  }
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  desc: string;
  bg: string;
}
