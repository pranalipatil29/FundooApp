import {NgModule}  from '@angular/core';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        ReactiveFormsModule
        
    ],
    exports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        ReactiveFormsModule       
    ],
    providers: []
  })
  export class materialModule { }