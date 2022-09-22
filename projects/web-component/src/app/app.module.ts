import { AppComponent } from './../../../../src/app/app.component';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { 
  constructor(protected injector: Injector) {

  }

  ngDoBootstrap() {
    const wc = createCustomElement(AppComponent, {
      injector: this.injector,
    });

    customElements.define('ANGULAR_WEB_COMPONENT', wc);
  }
}
