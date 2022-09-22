import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [] // don't bootstrap, for web component
  bootstrap: [AppComponent]
})
export class AppModule { 
  // constructor(protected injector: Injector) {

  // }

  // ngDoBootstrap() {
  //   const wc = createCustomElement(AppComponent, {
  //     injector: this.injector,
  //   });

  //   customElements.define('ANGULAR_WEB_COMPONENT', wc);
  // }
}
