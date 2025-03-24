import { Injectable } from '@angular/core';
import { Listing } from '../interfaces/types';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  listings: Listing[] = [];

  constructor(private httpClient: HttpClient) { }

  getListings(): Observable<Listing[]> {
    return this.httpClient.get<Listing[]>('/api/listings');
  }

  getListingById(id: string): Observable<Listing> {
    return this.httpClient.get<Listing>(`/api/listings${id}`);
  }

  addListingById(id: string): Observable<Listing> {
    return this.httpClient.post<Listing>(`/api/listings${id}/add-view`,
      {},
      httpOptions
    );
  }
}
