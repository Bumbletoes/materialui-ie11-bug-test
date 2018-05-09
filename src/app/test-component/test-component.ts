import { AfterViewInit, Component, Inject, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: []
})

export class TestComponent implements OnInit {
    constructor(
    public dialogRef: MatDialogRef<TestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {}
}
