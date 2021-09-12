import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  ngOnInit(): void {
    this.register = this.fb.group({
      'userName':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,  Validators.required),
      'name':new FormControl(null, Validators.required),
      'mobile':new FormControl(null, [Validators.required,Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')])
    })
  }

  registerSubmit(data:any){
    let dataToPass = {
    userName:data.userName,
    password:data.password,
    name:data.name,
    mobile:data.mobile,
    }
    this.cooServ.addUser(dataToPass).subscribe((data:any)=>{
      console.log(data);
      this.notify.msgSuccess("User Added Successfully"); 
      this.ngOnInit();   
    })
  }

  goToLogin(){
    this.router.navigate(['login']);
  }
}
