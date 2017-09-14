import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabsPaneComponent } from '../tabs-pane/tabs-pane.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabsPaneComponent) tabs: QueryList<TabsPaneComponent>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabsPaneComponent) {
    this.tabs.toArray().forEach(t => t.active = false);
    tab.active = true;
  }

}
