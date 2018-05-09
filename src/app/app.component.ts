import {
  Component, ElementRef
} from '@angular/core';
import { VERSION } from '@angular/material';

import {DialogService} from './dialog.service';
import {TestComponent} from './test-component/test-component';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  version = VERSION;

  constructor(private dialogService: DialogService) {
    
  }

  public openTestDialog() {
    this.dialogService.openDialog(TestComponent);
  }
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */