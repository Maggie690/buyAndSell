import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../../interfaces/types';
import { fakeListings } from '../../interfaces/fake-data';

@Component({
  selector: 'app-edit-listing-page',
  standalone: false,
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.css'
})
export class EditListingPageComponent implements OnInit {
  name: string = "";
  description: string = "";
  price: string = "";
  view: number = 0;
  
  listing!: Listing | undefined;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id);
  }

  onSubmit(): void {
    alert('Saved changes')
    this.router.navigateByUrl('/my-listings');
  }
}
