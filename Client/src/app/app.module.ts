import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppMaterialModule } from './material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorService } from './calculator/calculator.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, AppRoutingModule.components],
  bootstrap: [AppComponent],
  providers: [CalculatorService],
})
export class AppModule {}
