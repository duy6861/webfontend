import { Component, OnInit } from '@angular/core';

// import { Component } from '@angular/core';
		import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
    import { Observable } from 'rxjs';

    import {Item} from './models/item'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  private itemsCollection: AngularFirestoreCollection<Item>;

  itemlist: Observable<Item[]>;
  title = 'project';
  constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('Items');
    //this.items = this.itemsCollection.valueChanges();

    // .valueChanges() is simple. It just returns the
    // JSON data without metadata. If you need the
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. Only using for versions 7 and earlier



    this.itemlist = this.itemsCollection.valueChanges({ idField: 'name1' }); //chỉ sử dụng cho Angular 8,9
    //id1: ten field đại diện cho documnent id, lưu ý không
    //được đặt trùng với tên field khai báo trong dữ liệu

  }
  ngOnInit(){

  }

}
