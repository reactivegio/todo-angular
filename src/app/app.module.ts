import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { TodoListService } from './todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    AppRoutingModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
