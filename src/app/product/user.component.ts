import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../web-api/user.service';
import { PageChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-product',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public users = [];
  public pageSize = 10;
  public skip = 0;

  constructor(private _userService: UserService, private readonly _router: Router) { }

  ngOnInit() {
    this._userService.getProducts()
      .subscribe(data => this.users = data);
  }

  public onCellClicked({ dataItem }): void {
    this._router.navigate([`user-detail/${dataItem.userId}`]);
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
  }
}
