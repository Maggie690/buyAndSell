import { Component, OnInit } from '@angular/core';
import { Listing } from '../../interfaces/types';
import { ListingsService } from '../../sevices/listings.service';

@Component({
  selector: 'app-listings-page',
  standalone: false,
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.css'
})
export class ListingsPageComponent implements OnInit {

  listings: Listing[] = [];

  constructor(private listingService: ListingsService) { }

  ngOnInit(): void {
    this.listingService.getListings()
      .subscribe(listings => this.listings = listings);
  }
}
