import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {InfoDialogComponent} from "../components/info-dialog/info-dialog.component";
import {InfoDialogOptions} from '../model/InfoDialogOptions';

@Injectable({
  providedIn: 'root'
})
export class DialogService {


  constructor(private dialog: MatDialog) {
  }

  public openInfoDialog(
    title: string,
    message: string,
    {disableClose = false}: Partial<InfoDialogOptions> = {}
  ): Observable<any> {
    const reference = this.dialog.open(InfoDialogComponent, {
      width: 'auto',
      data: {
        title: title,
        message: message,
      },
      disableClose,
    });
    return reference.afterClosed();
  }
}
