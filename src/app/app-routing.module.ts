import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCreateComponent } from './views/product-create/product-create.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductDeleteComponent } from './views/product-delete/product-delete.component';
import { ProductUpdateComponent } from './views/product-update/product-update.component';

const routes: Routes = [
  {path: "" , component: HomeComponent},
  {path: "produtos" , component: ProductCrudComponent},
  {path: "produtos-create" , component: ProductCreateComponent},
  {path: "produtos-update/:id" , component: ProductUpdateComponent},
  {path: "produtos-delet/:id" , component: ProductDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
