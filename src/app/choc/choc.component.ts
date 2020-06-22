import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { User } from '../models/user';
import { NhanVien } from '../models/nhanvien'
import { UserService } from '../service/user.service';
import { FormGroup,FormControl} from '@angular/forms';


@Component({
  selector: 'app-choc',
  templateUrl: './choc.component.html',
  styleUrls: ['./choc.component.css']
})
export class ChocComponent implements OnInit {
  nhanvienlist: NhanVien[];
  editState: boolean = false;
  nhanvienToEdit: NhanVien;

  private usersCollection: AngularFirestoreCollection<User>;
  userlist: Observable<User[]>; // laay du lieu tren database do xuong bien userlist
  private nhanvienCollection: AngularFirestoreCollection<NhanVien>;
  // nhanvienlist: Observable<User[]>; // laay du lieu tren database do xuong bien userlist

  constructor(private readonly afs: AngularFirestore, private userService: UserService) {
    this.usersCollection = afs.collection<User>('users');

    this.userlist = this.usersCollection.valueChanges({ idField: '' });

    this.nhanvienCollection = afs.collection<NhanVien>('nhanvien');
    // this.nhanvienlist = this.nhanvienCollection.valueChanges({idFiled: ''});



   }
formupdate: FormGroup;
  ngOnInit(): void {
    this.userService.getNhanVien().subscribe(nhanvienlist => {
      this.nhanvienlist= nhanvienlist
      this.formupdate = new FormGroup({
        firstname: new FormControl(),
        lastname: new FormControl(),
        age: new FormControl(),
        sex: new FormControl(),
        phone: new FormControl(),
        salary: new FormControl(),
        status: new FormControl(),
      })
    })
  }
  update (data, nhanvien){
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
  // console.log(it);
	  const id = this.afs.createId();

    this.nhanvienCollection.doc(nhanvien.id).update(it);//thêm với docid tự động tạo
    this.clearState()
    alert("Success")
    //them vao itemsCollection với docid cụ thể

    // this.nhanvienCollection.doc(docid).set(Object.assign({}, it));//Object.assign({} khong co lenh nay thi se khong them vao firebase duoc
  }

delete(event,nhanvienlist){
  this.userService.deleteNhanVien(nhanvienlist);
  alert('Xoá Nhân Viên Thành Công');
}
edit(event,nhanvien: NhanVien){
this.editState=true;
this.nhanvienToEdit=nhanvien;
}
clearState(){
this.editState=false;
this.nhanvienToEdit=null;
}
}
