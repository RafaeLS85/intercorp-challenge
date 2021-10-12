import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

export interface CustomLink {
  path: string;
  label: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  background = 'primary';
  links: CustomLink[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    let route: Route;
    for (route of this.router.config) {
      if (route.data && route.data.label) {
        const link: CustomLink = {
          path: `/${route.path}`,
          label: route.data.label,
        };
        this.links.push(link);
      }
    }
  }
}
