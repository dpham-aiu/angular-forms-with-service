import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplaterefComponent } from './templateref/templateref.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FakeComponent } from './fake/fake.component';
import { FakeService2 } from './fake.service2';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    TemplaterefComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    FakeComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FakeService2],
  bootstrap: [AppComponent],
})
export class AppModule {}
