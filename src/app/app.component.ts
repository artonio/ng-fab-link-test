import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button #myBtn id="doesntMatter" (click)="attachJsonToGlobalScope()">Attach JSON to global scope</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'ng-fab-link-test';

  @ViewChild('myBtn') myBtn: ElementRef;

  sampleJson = {
    someNum: 123,
    someBool: true,
    someStr: 'Hello World'
  };

  attachJsonToGlobalScope() {
    console.log('attaching to window.myPrimitives or window["myPrimitives"]');
    window['myPrimitives'] = this.sampleJson;
  }

  ngAfterViewInit(): void {
    console.log(this.myBtn.nativeElement);
    console.log(document.getElementById('doesntMatter'));
  }
}
