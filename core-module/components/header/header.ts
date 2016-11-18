import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Logger } from "angular2-logger/core";

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class HeaderComponent implements OnInit {
  public activatedRoute: string;
  constructor(private logger: Logger, private router: Router) {
    this.logger.info("Header component has been loaded");
  }

  ngOnInit() { 

  }

  onNavigate($event: any, route: string): void {
    this.activatedRoute = route;
    this.router.navigate([route]);
  }
}