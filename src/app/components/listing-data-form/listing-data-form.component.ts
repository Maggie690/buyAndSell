import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../../interfaces/types';

@Component({
  selector: 'app-listing-data-form',
  standalone: false,
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.css'
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText: any;
  @Input() currentName: any;
  @Input() currentDescription: any;
  @Input() currentPrice: any;
  @Input() currentViews: any;

  name: string = "";
  description: string = "";
  price: string = "";
  views: string = "";

  @Output() onSubmit = new EventEmitter<Listing>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
    this.views = this.currentViews;
  }

  onButtonClick(): void {
    this.onSubmit.emit({
      id: '',
      name: this.name,
      description: this.description,
      price: Number(this.price),
      views: Number(this.views),
    });

    this.router.navigateByUrl('/my-listings');
  }
}
