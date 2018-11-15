import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="attachJsonToGlobalScope()">Attach JSON to global scope</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-fab-link-test';

  sampleJson = {
    someNum: 123,
    someBool: true,
    someStr: 'Hello World'
  };

  attachJsonToGlobalScope() {
    window['myPrimitives'] = this.sampleJson;
  }
}
