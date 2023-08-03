import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdatelistComponent } from './updatelist/updatelist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoneyPipe } from './pipes/money.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { QuantityPipe } from './pipes/quantity.pipe';
import { NamePipe } from './pipes/name.pipe';
import { DescriptionPipe } from './pipes/description.pipe';
import { DatePipe } from './pipes/date.pipe';
import { AuthorComponent } from './author/author.component';
import { DetailsComponent } from './details/details.component';
import { PanierComponent } from './panier/panier.component';
import { CartpageComponent } from './cartpage/cartpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegistreComponent,
    LoginComponent,
    ListProductComponent,
    AddProductComponent,
    HomeComponent,
    NotFoundComponent,
    UpdatelistComponent,
    MoneyPipe,
    SearchPipe,
    QuantityPipe,
    NamePipe,
    DescriptionPipe,
    DatePipe,
    AuthorComponent,
    DetailsComponent,
    PanierComponent,
    CartpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
