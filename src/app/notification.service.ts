import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }
  msgSuccess(msg:any){
    this.toastr.success(msg,"Success")
  }
  msgFailure(msg:any){
    this.toastr.error(msg,"Failure")
  }

}
