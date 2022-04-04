import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsultasComponent } from "./consultas/consultas.component";
import { FacturacionComponent } from "./facturacion/facturacion.component";
import { InventarioComponent } from "./inventario/inventario.component";
import { SummaryComponent } from "./summary/summary.component";
import { VentasComponent } from "./ventas/ventas.component";

const routes: Routes = [
  { path: "summary", component: SummaryComponent },
  { path: "ventas", component: VentasComponent },
  { path: "inventario", component: InventarioComponent },
  { path: "consultas", component: ConsultasComponent },
  { path: "facturacion", component: FacturacionComponent },
  { path: "", redirectTo: "/summary", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
