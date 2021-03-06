import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { VentasComponent } from "./ventas/ventas.component";
import { InventarioComponent } from "./inventario/inventario.component";
import { ConsultasComponent } from "./consultas/consultas.component";
import { FacturacionComponent } from "./facturacion/facturacion.component";
import { SummaryComponent } from "./summary/summary.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    VentasComponent,
    InventarioComponent,
    ConsultasComponent,
    FacturacionComponent,
    SummaryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
