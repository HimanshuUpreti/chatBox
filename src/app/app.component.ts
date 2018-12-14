import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemValue = '';
  items;
  name;
  show = true;
  i: Observable<any>;
  j: Observable<any>;
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items' , ref =>
      ref.limitToLast(4)
    ).valueChanges();
    // this.i = db.list('ivalue').valueChanges();
  }
  onName() {
    this.show = false;
  }
  onSubmit() {
    this.db.list('/items').push({ name: this.name, content: this.itemValue });
    this.itemValue = '';
  }
}
