import {NgModule}  from '@angular/core';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';


@NgModule({
    
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatSidenavModule,
        FlexLayoutModule,
        MatListModule,
        FormsModule
    ],
    exports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatSidenavModule,
        FlexLayoutModule,
        MatListModule,
        FormsModule
    ],
    providers: []
  })
  export class materialModule { }