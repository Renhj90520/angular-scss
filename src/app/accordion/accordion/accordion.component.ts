import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AccordionPaneComponent } from '../accordion-pane/accordion-pane.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit, AfterContentInit {
  @ContentChildren(AccordionPaneComponent) items: QueryList<AccordionPaneComponent>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const activeItems = this.items.filter(item => item.active);
  }

  selectItem(item: AccordionPaneComponent) {
    if (!item.active) {
      item.active = true;
    } else {
      item.active = false;
    }
  }
}
