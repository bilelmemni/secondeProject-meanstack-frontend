import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdatelistComponent } from './updatelist/updatelist.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthorComponent } from './author/author.component';
import { DetailsComponent } from './details/details.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegistreComponent},
  {path:'login',component:LoginComponent},
  {path:'panier',component:PanierComponent},
  {path:'article/:id',component:DetailsComponent},
  {path:'account/:id',component:AuthorComponent},
  {path:'addProduct',canActivate:[AuthGuard],component:AddProductComponent},
  {path:'listProduct',canActivate:[AuthGuard],component:ListProductComponent},
  {path:'update/:id',canActivate:[AuthGuard],component:UpdatelistComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
