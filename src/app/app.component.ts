import { Component } from '@angular/core';

@Component({
  selector: 'ss-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  links: Array<{ href: string, textContent: string}> = [
    {
      href: 'element-stacking',
      textContent: 'Element Stacking'
    },
    {
      href: 'line-height',
      textContent: 'Line Height'
    },
    {
      href: 'text-shadow',
      textContent: 'Text Shadow'
    },
  ];
}
