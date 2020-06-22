import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup,FormControl} from '@angular/forms';
import { NhanVien } from '../models/nhanvien'


@Component({
  selector: 'app-addnhanvien',
  templateUrl: './addnhanvien.component.html',
  styleUrls: ['./addnhanvien.component.css']
})
export class AddnhanvienComponent implements OnInit {
  private nhanvienCollection: AngularFirestoreCollection<NhanVien>;
  nhanvienlist: Observable<NhanVien[]>; // laay du lieu tren database do xuong bien userlist

  constructor(private readonly afs: AngularFirestore) {
    this.nhanvienCollection = afs.collection<NhanVien>('nhanvien');
    // this.nhanvienlist = this.nhanvienCollection.valueChanges({idFiled: ''});

  }
 formaddnhanvien: FormGroup;
  ngOnInit(): void {
    this.formaddnhanvien = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      age: new FormControl(),
      sex: new FormControl(),
      phone: new FormControl(),
      salary: new FormControl(),
      status: new FormControl(),
    })
  }

  add (data){
    let it : NhanVien = {};
    it.age=data.age
    it.phone = data.phone
    it.firstName = data.firstname
    it.lastName = data.lastname
    it.sex = data.sex
    it.salary = data.salary
    it.status = data.status

   // let docid = "id1";
  // tạo docid bằng AngularFirestore
  console.log(it);
	  const id = this.afs.createId();

    this.nhanvienCollection.add(it);//thêm với docid tự động tạo
    alert("Success")
    //them vao itemsCollection với docid cụ thể

    // this.nhanvienCollection.doc(docid).set(Object.assign({}, it));//Object.assign({} khong co lenh nay thi se khong them vao firebase duoc
  }
  update(data){

    let docId = "CqYQLKslXW6EJ2W1QIbb"
    let it : NhanVien = {};
    it.age=data.age
    it.phone = data.phone
    it.firstName = data.fname
    it.lastName = data.lname
    it.sex = data.sex
    it.salary = data.salary

    this.nhanvienCollection.doc(docId).update(it);
  }
  delete(docId = "CqYQLKslXW6EJ2W1QIbb"){
       this.nhanvienCollection.doc(docId).delete();
  }

}



