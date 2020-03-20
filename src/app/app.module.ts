import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CustomersComponent } from "./customers/customers.component";
import { CustomerFilterComponent } from "./customers/customer-filter/customer-filter.component";
import { CustomerListComponent } from "./customers/customer-list/customer-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerFilterComponent,
    CustomerListComponent
  ],
  exports: [CustomersComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
