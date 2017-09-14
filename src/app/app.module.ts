import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarPrimaryComponent } from './navigation/navbar-primary/navbar-primary.component';
import { ModalComponent } from './popup/modal/modal.component';
import { MessageComponent } from './message/message.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { TabsPaneComponent } from './tabs/tabs-pane/tabs-pane.component';
import { AccordionComponent } from './accordion/accordion/accordion.component';
import { AccordionPaneComponent } from './accordion/accordion-pane/accordion-pane.component';
import { PillsComponent } from './navigation/pills/pills.component';
import { TooltipComponent } from './popup/tooltip/tooltip.component';
import { NavbarSecondaryComponent } from './navigation/navbar-secondary/navbar-secondary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarPrimaryComponent,
    ModalComponent,
    MessageComponent,
    TabsComponent,
    TabsPaneComponent,
    AccordionComponent,
    AccordionPaneComponent,
    PillsComponent,
    TooltipComponent,
    NavbarSecondaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
