import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

var callback;

@Component({
  selector: 'app-root',
  template: `
    <button #myBtn id="doesntMatter" (click)="attachJsonToGlobalScope()">Attach JSON to global scope</button>
    <button (click)="changeValues()" id="changeValues">Change values and attach to global scope</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'ng-fab-link-test';

  @ViewChild('myBtn') myBtn: ElementRef;

  sampleJson = {
    someNum: 123,
    someBool: true,
    someStr: 'Hello World'
  };

  cipRequestOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW46dGVjaDIwbmExMw=='
      }),
    withCredentials: true
  };

  constructor(protected http: HttpClient) {
  }

  changeValues() {
    this.sampleJson.someNum = 321;
    this.sampleJson.someBool = false;
    this.sampleJson.someStr = 'RIP';

    console.log('Change values: attaching to window.myPrimitives or window["myPrimitives"]');
    window['myPrimitives'] = this.sampleJson;

    window['myJavaCB']();
  }

  attachJsonToGlobalScope() {
    console.log('attaching to window.myPrimitives or window["myPrimitives"]');
    window['myPrimitives'] = this.sampleJson;
  }

  ngAfterViewInit(): void {
    console.log(this.myBtn.nativeElement);
    console.log(document.getElementById('doesntMatter'));

  }


  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHander(event) {
    this.http.get('/cip_server/cipusers', this.cipRequestOptions).subscribe((r) => {

    });
  }
  ngOnDestroy(): void {

  }
}
