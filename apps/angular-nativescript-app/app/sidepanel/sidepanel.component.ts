import { Component } from '@angular/core';
import { SidepanelService } from "~/services/sidepanel.service";

@Component({
  selector: 'app-sidepanel',
  moduleId: module.id,
  templateUrl: './sidepanel.component.html',
})
export class SidepanelComponent {
  constructor(public sidePanelService: SidepanelService) {

  }
}
