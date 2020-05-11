import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {

  constructor(private readonly _router: Router) { }

  ngOnInit() {
  }

  public mainPageClick(): void {
    this._router.navigate(['home']);
  }

  public staticsClick(): void {
    this._router.navigate(['user']);
  }
}
