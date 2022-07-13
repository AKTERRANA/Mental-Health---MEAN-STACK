import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Professional } from '../models/model.interface';
import { CloudService } from '../service/cloud.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
 toggleNew:boolean = false;
 professionals: Professional[] =[];
  constructor(private cloudSer:CloudService) { }
myForm!:FormGroup ;
  ngOnInit(): void {

    this.myForm = new FormGroup({
      name: new FormControl(''),
      age:new FormControl(''),
      fees:new FormControl(''),
      newPatients: new FormControl(''),
      conditions: new FormControl('')
    })

this.getProfessionals();
  }

  toggleNewBtn(){
    this.toggleNew =!this.toggleNew;
  }

  onSubmit(){
    this.cloudSer.addProfessionals(this.myForm.value.name,this.myForm.value.age,this.myForm.value.fees,this.myForm.value.newPatients,this.myForm.value.conditions).subscribe((res)=>{
      console.log(res)
      this.getProfessionals()
    })
  }

  getProfessionals(){
    this.cloudSer.getProfessionals().subscribe((res)=>{
    this.professionals = res;
    console.log(this.professionals)
    })
  }
}
