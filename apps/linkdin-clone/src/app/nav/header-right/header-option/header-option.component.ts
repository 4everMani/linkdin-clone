import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'linkdin-clone-header-option',
  templateUrl: './header-option.component.html',
  styleUrls: ['./header-option.component.scss'],
})
export class HeaderOptionComponent implements OnInit {
  
  @Input() title?: string;

  @Input() icon?: string;
  
  constructor() {}

  ngOnInit(): void {}
}
