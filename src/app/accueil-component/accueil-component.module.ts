import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ReadallComponent } from './readall/readall.component';


import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateComponent,
    ReadallComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AccueilComponentModule { }
