import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { NewUserComponent } from './modals/new-user/new-user.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from './services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers:[UsersService]
})
export class AppComponent {
  users$!: Observable<any[]>;

	constructor(private modalService: NgbModal, private userServices: UsersService) {
    this.getUsers();
  }

	open() {
		const modalRef = this.modalService.open(NewUserComponent);
    
    modalRef.result.then(
      async (result) => {
        await this.userServices.create(result);
        this.getUsers();
      },
      (reason) => {
        console.log(reason);
      }
    );
	}

  async getUsers(){
    this.users$ = this.userServices.getAll();
  }
}
