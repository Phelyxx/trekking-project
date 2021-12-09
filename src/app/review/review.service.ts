import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ReviewDetail} from './reviewDetail';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl: string = environment.baseUrl + 'reviews';
  constructor(private http: HttpClient) {
  }

  getReviews(): Observable<ReviewDetail[]> {
    return this.http.get<ReviewDetail[]>(this.apiUrl);
  }

  getReview(reviewId): Observable<ReviewDetail> {
    return this.http.get<ReviewDetail>(`${this.apiUrl}/${reviewId}`);
  }
  createReview(review: ReviewDetail): Observable<ReviewDetail>{
    return this.http.post<ReviewDetail>(`${this.apiUrl}`, review);
  }
}
