import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user:any ={};
  constructor(private commServ:CommonService,private router:Router) { }

  ngOnInit(): void {
    this.commServ.getUser().subscribe((data:any)=>{
      this.user = data;
    })
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
