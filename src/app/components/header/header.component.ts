import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';
import { MatMenuModule } from '@angular/material/menu';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule, MatButtonModule, MatIconModule,MatListModule,MatSidenavModule,MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',

})

export class HeaderComponent {
  title = 'my-app';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
