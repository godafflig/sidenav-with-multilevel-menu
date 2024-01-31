import { Component, OnInit, isDevMode } from '@angular/core';
import { environment } from '../environment/environment'; 




interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sidenav-with-multilevel-menu';
  isSideNavCollapsed = false;
  screenWidth = 0;

  ngOnInit() {
    if (isDevMode()) {
      console.log('Mode développement!');
    } else {
      console.log('Mode production!');
    }
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
