import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxDatatableService {
  hero_pages;
  total_count;

  recalculateSerailNo() {
    let counter: number = 1
    this.hero_pages.forEach(page => {
      page.serialNo = counter
      counter = counter + 1
    })
  }

  deleteUser( id: string ) {
    const newHeroPages = this.hero_pages.filter(page => page.id != id)
    console.log(newHeroPages)
    this.hero_pages = newHeroPages
    console.log(this.hero_pages)
    this.recalculateSerailNo()
  }

  editUser(id: string) {
    this.recalculateSerailNo()
  }


  constructor() {
    this.hero_pages = [{
      'id': '05fb32e7-9fae-4879-8379-d037937fdc241',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A',
      'email': 'FCF@gmial.com',
      'serialNo': 1
    }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc242',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'B',
      'email': 'FCF1@gmail.com',
      'serialNo': 2
    }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc243',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'C',
      'email': 'FCF2@tahoo.com',
      'serialNo': 3
    }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc244',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF3@gmail.com',
      'serialNo': 4
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc245',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF3@gmail.com',
      'serialNo': 5
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc246',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF3@gmail.com',
      'serialNo': 6
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc247',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF3@gmail.com',
      'serialNo': 7
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc248',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF3@gmail.com',
      'serialNo': 8
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc249',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF3@gmail.com',
      'serialNo': 9
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24a',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF3@gmail.com',
      'serialNo': 10
      },{
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24s',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF@gmail.com',
      'serialNo': 11
    }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24d',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF1@gmail.com',
      'serialNo': 12
    }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24f',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF2@tahoo.com',
      'serialNo': 13
    }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24g',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF3@gmail.com',
      'serialNo': 14
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24h',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF3@gmail.com',
      'serialNo': 15
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24j',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF3@gmail.com',
      'serialNo': 16
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24k',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF3@gmail.com',
      'serialNo': 17
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24l',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF3@gmail.com',
      'serialNo': 18
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24q',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF3@gmail.com',
      'serialNo': 19
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24w',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'FCF3@gmail.com',
      'serialNo': 20
      }, {
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24e',
      'username': 'MAKING FANTASY FOOTBALL',
      'dateOfBirth': 'A REAL THING',
      'email': 'XXXX@gmail.com',
      'serialNo': 21
      }
    ];

    this.recalculateSerailNo()

    this.total_count = this.hero_pages.length

  }

}
