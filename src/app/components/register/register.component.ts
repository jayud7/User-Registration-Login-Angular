import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router, private cooServ:CommonService, private notify:NotificationService) { }
  register: any = FormGroup;
  id:any = this.cooServ.countUser();
  res:any;
  ngOnInit(): void {
    this.register = this.fb.group({
      userName:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required],
      name:['',Validators.required],
      mobile:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])]
    })
  }
  registerSubmit(data:any){
    let dataToPass = {
    userName:data.userName,
    password:data.password,
    name:data.name,
    mobile:data.mobile,

    id: this.id
    }
    this.res = this.cooServ.addUser(dataToPass).subscribe((data:any)=>{
      console.log(data);
      //this.notify.msgSuccess("User Added Successfully");
    })
  }

  goToLogin(){
    this.router.navigate(['login']);
  }

}
