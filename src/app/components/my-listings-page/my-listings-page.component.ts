import { Component, OnInit } from '@angular/core';
import { Listing } from '../../interfaces/types';
import { fakeListings } from '../../interfaces/fake-data';

@Component({
  selector: 'app-my-listings-page',
  standalone: false,
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.css'
})
export class MyListingsPageComponent implements OnInit {
  listing: Listing[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listing = fakeListings;
  }

  onDelete(listingId: string):void{
    alert('Delete');
  }
}
