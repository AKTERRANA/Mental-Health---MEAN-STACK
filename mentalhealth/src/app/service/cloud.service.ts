import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Professional } from '../models/model.interface';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor(private http: HttpClient) { }

  readonly BASEURL ="http://localhost:3000";

  getProfessionals(){
    return this.http.get<Professional[]>(`${this.BASEURL}/professionals`);
  }
  addProfessionals(name:string,age:number,fees:number,newPatients:boolean,conditions:string){
    return this.http.post<any>(`${this.BASEURL}/add-professional`,{name,age,fees,newPatients,conditions})
  }
}
