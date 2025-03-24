import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../../interfaces/types';
import { ListingsService } from '../../sevices/listings.service';
// import { fakeListings } from '../../interfaces/fake-data';


@Component({
  selector: 'app-listing-detail-page',
  standalone: false,
  templateUrl: './listing-detail-page.component.html',
  styleUrl: './listing-detail-page.component.css'
})
export class ListingDetailPageComponent implements OnInit {
  isLoading: boolean = true;
  listing: Listing[] = [];

  constructor(private route: ActivatedRoute, private listingService: ListingsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.listingService.getListingById(id)
      .subscribe(listing => {
        listing = listing;
        this.isLoading = false;
      });

    this.listingService.addListingById(id).subscribe(() => console.log('View updated!'))
  }
}
