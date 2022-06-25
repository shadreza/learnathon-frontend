import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxDatatableService {
  hero_pages;
  total_count;
  constructor() {
    this.hero_pages = [{
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF',
      'order_number': 1
    }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF1',
      'order_number': 2
    }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF2',
      'order_number': 3
    }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF3',
      'order_number': 4
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF3',
      'order_number': 5
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF3',
      'order_number': 6
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF3',
      'order_number': 7
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF3',
      'order_number': 8
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF3',
      'order_number': 9
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF3',
      'order_number': 10
      },{
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF',
      'order_number': 11
    }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF1',
      'order_number': 12
    }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF2',
      'order_number': 13
    }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF3',
      'order_number': 14
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF3',
      'order_number': 15
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF3',
      'order_number': 16
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF3',
      'order_number': 17
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF3',
      'order_number': 18
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF3',
      'order_number': 19
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'FCF3',
      'order_number': 20
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',
      'status': 'ACTIVE',
      'title_line1': 'MAKING FANTASY FOOTBALL',
      'title_line2': 'A REAL THING',
      'type': 'XXXX',
      'order_number': 21
      }
    ];

    this.total_count = this.hero_pages.length;
  }
}
