import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HelloComponent } from './hello.component';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DropdownComponent, CollapsibleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
