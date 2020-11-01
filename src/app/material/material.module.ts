import { NgModule } from '@angular/core';
import {MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule} from '@angular/material';

const MaterialComponents = [
  MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule
]

@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
