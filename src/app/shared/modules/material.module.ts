import { NgModule } from '@angular/core';
import { MatButtonModule, MatListModule, MatToolbarModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
