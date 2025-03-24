import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  standalone: false,
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})
export class NewListingPageComponent implements OnInit {
  name: string = "";
  description: string = "";
  price: string = "";
  view: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Submit')
    this.router.navigateByUrl('/my-listings');
  }
}
