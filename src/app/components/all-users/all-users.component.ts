import { Component, OnInit } from '@angular/core';
import { NgxDatatableService } from '../../services/ngx-datatable.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  rows: any = [];
  totalCount: number = 0;
  closeResult: string ="";
  dataParams: any = {
    page_num: 0,
    page_size: 0
  };

  constructor(
    private ngxDatatableService: NgxDatatableService
  ) { }

  ngOnInit() {
    this.dataParams.page_num = 1;
    this.dataParams.page_size = 5;
    this.getAllHeroList();
  }


  getAllHeroList() {
    this.rows = this.ngxDatatableService.hero_pages;
    this.totalCount = this.ngxDatatableService.total_count;
  }


}
