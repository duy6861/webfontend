import { Injectable } from '@angular/core';
import { NhanVien } from '../models/nhanvien';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
nhanvienCollection: AngularFirestoreCollection<NhanVien>;
nhanvienlist: Observable<NhanVien[]>;
  constructor(public afs:AngularFirestore) {
  this.nhanvienCollection=this.afs.collection('nhanvien')
  this.nhanvienlist= this.nhanvienCollection.snapshotChanges().pipe(map(changes=>{
    return changes.map(a=>{
      const data=a.payload.doc.data() as NhanVien;
      data.id=a.payload.doc.id;
      return data;
    })
  }))
  }
  getNhanVien(): Observable <NhanVien[]>{
    return this.nhanvienlist;

  }
  deleteNhanVien(nhanvien: NhanVien){
    this.nhanvienCollection.doc(nhanvien.id).delete();

  }
  updateNhanVien(nhanvien: NhanVien){
    this.nhanvienCollection.doc(nhanvien.id).update(nhanvien);
  }
}


