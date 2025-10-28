import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// COMPONENTES NÃO-STANDALONE
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { ComecoPublicoComponent } from './views/comeco-publico/comeco-pu.component';
import { HeaderPublicoComponent } from './templates/header-publico/header-publico.component'; // Header Público

// COMPONENTES STANDALONE
import { CatalogoComponent } from './views/catalogo/catalogo.component';
import { ComoFuncionaComponent } from './views/como-funciona/como-funciona.component';
import { SobreNosComponent } from './views/sobre-nos/sobre-nos.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';

@NgModule({
  declarations: [
    // Declare somente os componentes não-standalone aqui
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    ComecoPublicoComponent,
    HeaderPublicoComponent, // Componente Público
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Usando AppRoutingModule para o roteamento
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    // Componentes Standalone, agora importados no `imports` diretamente
    CatalogoComponent,
    ComoFuncionaComponent,
    SobreNosComponent,
    PerfilComponent,
    HeaderComponent, // Standalone Header
    FooterComponent, // Standalone Footer
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
