import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidepanel-item',
  moduleId: module.id,
  templateUrl: './sidepanel-item.component.html',
})
export class SidepanelItemComponent {
  @Input() clickId: string;
  @Input() label: string;
  @Output() action = new EventEmitter<any>();

  constructor() {
  }
}
