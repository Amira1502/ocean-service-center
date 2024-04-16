import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

import { WhoWeAreComponent } from '../partials/who-we-are/who-we-are.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatIconModule, MatToolbarModule, MatButtonModule,  MatCardModule, WhoWeAreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  testimonials = [
    {  author: '- Analisa Guay', text: '"Ocean Service Center saved me thousands in repairs!"    ' },
    {  author: '- Elise Sanders', text: '"Thanks for the excellent service!"' },
    {  author: '- Sean Gerety', text: '"Just like eBay for boat repairs"' },
  
  ];

  brands = [
       {icon: '/assets/brand/maui_marine.png'},
       {icon: '/assets/brand/bollinger.png'},
       {icon: '/assets/brand/irving.png'},
       {icon: '/assets/brand/newport.png'},
       {icon: '/assets/brand/keppel.png'},


  ];

  
}
