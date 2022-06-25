import { Component, Inject, OnInit } from '@angular/core';
import { NgxDatatableService } from '../../services/ngx-datatable.service';
import { NbWindowService } from '@nebular/theme';
import { DOCUMENT } from '@angular/common';
// import { PopupWindowComponent } from '../popup-window/popup-window.component';

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
  selectedMessage: string = ""
  totalMessage: string = ""
  unitsPerPage: number = 0
  editOverlaySet: boolean = false

  constructor(
    private ngxDatatableService: NgxDatatableService,
    private windowService: NbWindowService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  getAllHeroList() {
    this.rows = this.ngxDatatableService.hero_pages;
    this.totalCount = this.ngxDatatableService.total_count;
  }

  elementsPerPageToggled() {
    if (this.dataParams.page_size < 1 || !this.dataParams.page_size) {
      this.dataParams.page_size = 8
    }
  }

  ngOnInit() {
    this.dataParams.page_num = 1;
    this.dataParams.page_size = 8;
    this.getAllHeroList()
  }

  editClicked(row: any) {
    // this.windowService.open(PopupWindowComponent, { title: `Edit ${row.username}'s Info` })
    this.editOverlaySet = !this.editOverlaySet
  }

  deleteClicked(row: any) {
    this.ngxDatatableService.deleteUser(row.id)
    this.getAllHeroList()
  }


}
