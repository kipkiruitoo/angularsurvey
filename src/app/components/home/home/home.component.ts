import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';
import { RegisterComponent } from 'app/components/auth/register/register.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.openDialog()
    }, 2000);

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      height: '300px',
      width: '400px'

      // data: { name: this.name, animal: this.animal }
    });


  }
}
