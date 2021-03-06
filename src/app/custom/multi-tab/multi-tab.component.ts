import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'multi-tab',
  templateUrl: './multi-tab.component.html',
  styleUrls: ['./multi-tab.component.scss']
})
export class MultiTabComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  activeTab: string;
  tabs: string[] = [];
  
  constructor(private helperService: HelperService) { 
    this.helperService.copyPreTagContent(null);
  }

  ngOnInit(): void {
    this.tabs = [
      'heading 1',
      'heading 2',
      'heading 3',
      'heading 4',
      'heading 5',
    ];
    this.activeTab = this.tabs[0];
  }

  selectTab(tabId: number, name? : string) {
    this.staticTabs.tabs[tabId].active = true;
    this.activeTab = name;
  }

}
