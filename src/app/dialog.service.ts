import { Injectable, TemplateRef } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ComponentType } from '@angular/cdk/portal';

@Injectable()
export class DialogService {

  constructor(public dialogService: MatDialog) { }

  public openDialog<T>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>) {
    console.log('about to call open');
    let config = new MatDialogConfig();
    this.dialogService.open(componentOrTemplateRef, config);
    console.log('open called');
  }
}
