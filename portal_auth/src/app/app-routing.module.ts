import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { ComecoPublicoComponent } from './views/comeco-publico/comeco-pu.component';
import { AuthGuard } from './guardas/auth.guard';
import { PerfilComponent } from './views/perfil/perfil.component';
import { CatalogoComponent } from './views/catalogo/catalogo.component';
import { ComoFuncionaComponent } from './views/como-funciona/como-funciona.component';
import { SobreNosComponent } from './views/sobre-nos/sobre-nos.component';

const routes: Routes = [
  // ROTAS PÚBLICAS
  { path: '', component: ComecoPublicoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  // ROTAS PROTEGIDAS
  { path: 'catalogo', component: CatalogoComponent, canActivate: [AuthGuard] },
  { path: 'como-funciona', component: ComoFuncionaComponent, canActivate: [AuthGuard] },
  { path: 'sobre-nos', component: SobreNosComponent, canActivate: [AuthGuard] },
  { path: 'comeco-publico', component: ComecoPublicoComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },

  // ROTA CORINGA - REDIRECIONA PARA 'comeco-publico' SE A ROTA NÃO FOR ENCONTRADA
  { path: '**', redirectTo: 'comeco-publico' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
