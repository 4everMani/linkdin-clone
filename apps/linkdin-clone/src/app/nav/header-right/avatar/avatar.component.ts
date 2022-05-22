import { Component, Input } from '@angular/core';

@Component({
  selector: 'linkdin-clone-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent  {

  @Input() avatarUrl?: string;
  constructor() {}

  
}
