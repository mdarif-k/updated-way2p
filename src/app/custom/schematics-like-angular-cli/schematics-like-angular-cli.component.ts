import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'app-schematics-like-angular-cli',
  templateUrl: './schematics-like-angular-cli.component.html',
  styleUrls: ['./schematics-like-angular-cli.component.scss']
})
export class SchematicsLikeAngularCliComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  activeTab: string;
  tabs: string[] = [];
  
  constructor(private helperService: HelperService) { 
    this.helperService.copyPreTagContent(null);
  }

  ngOnInit(): void {
    this.tabs = [
      'Prerequisite',
      'Create multi tab blog schematics for component',
      // 'heading 3',
      // 'heading 4',
      // 'heading 5',
    ];
    this.activeTab = this.tabs[0];
  }

  selectTab(tabId: number, name? : string) {
    this.staticTabs.tabs[tabId].active = true;
    this.activeTab = name;
  }

}
