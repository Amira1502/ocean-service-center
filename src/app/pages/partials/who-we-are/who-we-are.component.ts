import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [CommonModule,MatTabsModule, MatGridListModule, MatIconModule, MatCardModule, MatButtonModule],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.css'
})
export class WhoWeAreComponent {
  
  itemsBoatOwner = [
    { icon: '/assets/icons/person.svg', title: 'Create Account ', text: ' Create an account on our website. It’s a simple process. ' },
    { icon: '/assets/icons/boat-icon.png', title: 'Post Your Job ', text: ' Once the auction is closed, boat owners have 48 hours to make the initial payment of the bid price through the secure payment section. Boat owners are responsible for completing all milestone payments along the way. If initial payment is not made, the auction then reopens. ' },
    { icon: '/assets/icons/bid-icon.png', title: 'The Bidding Begin ', text: ' Repair Professionals/Shipyards and surveyors have access to your job auction, and then bid on that repair. Normal bidding time is 28 days. ' },
    { icon: '/assets/icons/edit-icon.png', title: 'Get Bids from Certified Pros ', text: ' You’ll get bids from our verified pool of certified professionals who will give you a price for that given repair or survey job. Everyone will compete to give you the best price!' },
    { icon: '/assets/icons/check-icon.svg', title: 'Select Best Offer  ', text: '  You get to choose who you want to repair your boat at the price that was offered.All certified, all verified, only the best offers win.  ' },
    { icon: '/assets/icons/settings-icon.png', title: 'Monitor Repair Process  ', text: '  You’ll get repair updates along the way so you know exactly how much progress has been made.  ' },
    { icon: '/assets/icons/success-icon.svg', title: 'Repair is Finished   ', text: ' You’ll get a notification once your repair has been finished so you know when you can get your boat back. ' },
    { icon: '/assets/icons/dollar-icon.svg', title: 'Begin Payments ', text: ' Once the auction is closed, boat owners have 48 hours to make the initial payment of the bid price through the secure payment section. Boat owners are responsible for completing all milestone payments along the way. If initial payment is not made, the auction then reopens. ' },
    { icon: '/assets/icons/action-icon.svg', title: 'Get back on the Water! ', text: ' Now that you have your boat back, get back to doing the things you love. Also, feel free to leave a rating and feedback about your experience with your repair professional/shipyard or surveyor on our site. ' },

  ];

  itemsShipyard = [
    { icon: '/assets/icons/person.svg', title: 'Create Account ', text: ' Set up an account with location, all certifications, and your guarantees.Transparency is key. ' },
    { icon: '/assets/icons/location-icon.png', title: 'Post Your Job ', text: '  Search through the bids in your area and find work that is within your expertise. ' },
    { icon: '/assets/icons/bid-icon.png', title: 'The Bidding Begin ', text: ' You can bid on jobs that your company is equipped to repair. You choose the price you’re willing to get paid for that job. ' },
    { icon: '/assets/icons/boat-icon.png', title: ' Get Work ', text: ' If you win the bid, then you get the work. You’ll receive a notice if your bid won. ' },
    { icon: '/assets/icons/camera-icon.svg', title: ' Send Updates   ', text: ' You’ll send repair updates to the owner along the way. Larger jobs may require more updates. ' },
    { icon: '/assets/icons/dollar-icon.svg', title: 'Get Paid', text: ' Once the auction is closed, boat owners have 48 hours to make the initial payment of the bid price through the secure payment section. Boat owners are responsible for completing all milestone payments along the way. If initial payment is not made, the auction then reopens. '}
  ];

  itemsSurveyor = [
    { icon: '/assets/icons/person.svg', title: 'Create Account ', text: ' Set up an account with location, all certifications, and your guarantees.Transparency is key. ' },
    { icon: '/assets/icons/location-icon.png', title: 'Post Your Job ', text: '  Search through the bids in your area and find work that is within your expertise. ' },
    { icon: '/assets/icons/bid-icon.png', title: 'The Bidding Begin ', text: ' You can bid on jobs that your company is equipped to repair. You choose the price you’re willing to get paid for that job. ' },
    { icon: '/assets/icons/boat-icon.png', title: ' Get Work ', text: ' If you win the bid, then you get the work. You’ll receive a notice if your bid won. ' },
    { icon: '/assets/icons/camera-icon.svg', title: ' Send Updates   ', text: ' You’ll send repair updates to the owner along the way. Larger jobs may require more updates. ' },
    { icon: '/assets/icons/dollar-icon.svg', title: 'Get Paid', text: ' Once the auction is closed, boat owners have 48 hours to make the initial payment of the bid price through the secure payment section. Boat owners are responsible for completing all milestone payments along the way. If initial payment is not made, the auction then reopens. '}
  ];

}
