import { Component } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  standalone: false,
  templateUrl: './component-interaction-component.html',
  styleUrl: './component-interaction-component.css',
})
export class ComponentInteractionComponent {
  title = 'my-app';
  data = 'Sample Text';
  dataFromChild: any;
}