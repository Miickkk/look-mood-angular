import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogo.component.html', 
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent implements OnInit {
  filtroCor = 'todas';
  filtroEstilo = 'todos';
  filtroGenero = 'todos';
  lookSelecionado: any = null;

  looks = [
    {
      nome: 'Look Street Rock',
      cor: 'preto',
      estilo: 'urbano',
      genero: 'rock',
      imagem: 'https://images.unsplash.com/photo-1618354691505-8ec8f88b6874',
      descricao:
        'Jaqueta de couro, calça jeans escura e coturno. Ideal para o estilo Rock Urbano.',
    },
    {
      nome: 'Look Casual Pop',
      cor: 'colorido',
      estilo: 'casual',
      genero: 'pop',
      imagem: 'https://images.unsplash.com/photo-1521334884684-d80222895322',
      descricao:
        'Camisa clara e calça jeans leve, perfeito para um dia descontraído com música Pop.',
    },
    {
      nome: 'Look Elegante Eletrônico',
      cor: 'branco',
      estilo: 'elegante',
      genero: 'eletronica',
      imagem: 'https://images.unsplash.com/photo-1600181952037-7ad0e0caa46c',
      descricao:
        'Tons neutros, blazer leve e visual minimalista — ideal para eventos noturnos.',
    },
    {
      nome: 'Look Hip-Hop Style',
      cor: 'colorido',
      estilo: 'urbano',
      genero: 'hiphop',
      imagem: 'https://images.unsplash.com/photo-1620799137297-94aef0a9ba1b',
      descricao:
        'Moletom largo, corrente dourada e boné. Um visual autêntico e cheio de atitude.',
    },
  ];

  // Função para filtrar os looks
  get looksFiltrados() {
    return this.looks.filter(
      (look) =>
        (this.filtroCor === 'todas' || look.cor === this.filtroCor) &&
        (this.filtroEstilo === 'todos' || look.estilo === this.filtroEstilo) &&
        (this.filtroGenero === 'todos' || look.genero === this.filtroGenero)
    );
  }

  ngOnInit() {
    // Avatar do usuário
    const saved = JSON.parse(localStorage.getItem('profileData') || '{}');
    if (saved?.pic) {
      const avatar = document.getElementById('user-avatar') as HTMLImageElement;
      if (avatar) avatar.src = saved.pic;
    }

    // Dropdown
    const avatar = document.getElementById('user-avatar');
    const dropdown = document.getElementById('dropdown-menu');
    if (avatar && dropdown) {
      avatar.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('active');
      });
      document.addEventListener('click', () =>
        dropdown.classList.remove('active')
      );
    }

    // Canvas animado
    this.iniciarCanvas();
  }

  abrirModal(look: any) {
    this.lookSelecionado = look;
  }

  fecharModal() {
    this.lookSelecionado = null;
  }

  private iniciarCanvas() {
    const canvas = document.getElementById('bgCanvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let t = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        for (let x = 0; x < width; x++) {
          const y = height / 2 + Math.sin(x * 0.01 + t + i) * 25 * (1 + i / 2);
          ctx.lineTo(x, y);
        }
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, `rgba(94, 41, 217, ${0.15 + i * 0.1})`);
        gradient.addColorStop(1, `rgba(7, 5, 64, ${0.05 + i * 0.05})`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      t += 0.02;
      requestAnimationFrame(draw);
    };
    draw();
  }

  // Método para atualizar os filtros
  atualizarFiltros() {
    // Apenas atualiza a visualização, o getter `looksFiltrados` já faz o trabalho de filtragem
  }
}
