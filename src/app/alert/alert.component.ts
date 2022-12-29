import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div class="alert alert-dismissible" 
      [ngClass]="{'alert-danger': !success, 'alert-success': success}"
      role="alert" id="liveAlert" *ngIf="canVisible">
      <div class="msg-alert">
        <span class="d-block" *ngFor="let item of data; index as i">
          <span class="fw-bolder"> {{ i + 1 }} </span> => 
          <span> {{ item }} </span>
        </span>
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `,
  styles: [
  ]
})
export class AlertComponent {

  @Input() success?: boolean;
  @Input()
  get data(): string[] {return this._data}
  set data(data: string[]|string|boolean) {
    
    this.canVisible = true;
    this._data = [];

    if (typeof data === 'string') {
      this._data.push(data)
    }else if(typeof data === 'boolean') {
      this.canVisible = data;
    }else{
      for (let [a,b] of Object.entries(data) ) {
        this._data.push(b);
      }
    }
  }
  private _data: string[] = [];
  public canVisible: boolean = false;
  
}
