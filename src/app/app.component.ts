import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OwnerLocksRental';
  constructor(private toastr: ToastrService){

  }
  showSuccess() {
    this.toastr.success('Yow warraUp hommie!', 'Well Done!');
  }
}
