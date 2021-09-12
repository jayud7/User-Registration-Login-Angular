import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: any = FormGroup;
  users:any = [];
  constructor(private fb:FormBuilder, private router:Router, private commserv:CommonService) { }

  ngOnInit(): void {

    this.login = this.fb.group({
    userName:['',Validators.compose([Validators.required,Validators.email])],
    password:['',Validators.required]
    })
    
    this.commserv.getUser().subscribe((data:any)=>{
      this.users = data;
    })
  }

  loginSubmit(data:any){
    if(data.userName){
      this.users.forEach((item:any) => {
        if(item.userName === data.userName && item.password === data.password){
          localStorage.setItem("isLoggedIn","true");
          this.router.navigate(['home']);
          
        } 
        else if(!(localStorage.getItem("isLoggedIn")==="true")){
          localStorage.clear();
        }
        
      });
    }
  }

  goToSignUp(){
    this.router.navigate(['register']);
  }
}
