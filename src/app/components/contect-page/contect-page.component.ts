import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../../interfaces/types';
import { fakeListings } from '../../interfaces/fake-data';
import { ListingsService } from '../../sevices/listings.service';

@Component({
  selector: 'app-contect-page',
  standalone: false,
  templateUrl: './contect-page.component.html',
  styleUrl: './contect-page.component.css'
})
export class ContectPageComponent implements OnInit {
  email: string = '';
  message: string = '';
  listing: Listing | undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private listingService: ListingsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.listingService.getListingById(id).subscribe(listing => {
      this.listing = listing;
      this.message = `Hi, I'm intersted in your ${this.listing?.name.toLocaleLowerCase}!`;

    });
  }

  sendMessage(): void {
    alert('Your message has been sent!')
    this.router.navigateByUrl('/listings');
  }
}
