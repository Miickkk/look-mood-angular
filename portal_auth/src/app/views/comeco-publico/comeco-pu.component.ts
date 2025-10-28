import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comeco-publico',
  templateUrl: './comeco-pu.component.html',
  styleUrls: ['./comeco-pu.component.scss']
})
export class ComecoPublicoComponent implements OnInit {
  ngOnInit(): void {}

  abrirModal(id: number) {
    const modal = document.getElementById('modalLook') as HTMLElement;
    const img = document.getElementById('modalImg') as HTMLImageElement;
    const titulo = document.getElementById('modalTitulo')!;
    const descricao = document.getElementById('modalDescricao')!;

    modal.style.display = 'flex';

    switch (id) {
      case 1:
        img.src = 'assets/img/look1.jpg';
        titulo.textContent = 'Look Casual';
        descricao.textContent = 'Confortável e estiloso para o dia a dia.';
        break;
      case 2:
        img.src = 'assets/img/look2.jpg';
        titulo.textContent = 'Look Elegante';
        descricao.textContent = 'Perfeito para eventos e jantares sofisticados.';
        break;
      case 3:
        img.src = 'assets/img/look3.jpg';
        titulo.textContent = 'Look Streetwear';
        descricao.textContent = 'Moderno e cheio de atitude para o dia a dia.';
        break;
    }
  }

  fecharModal() {
    const modal = document.getElementById('modalLook') as HTMLElement;
    modal.style.display = 'none';
  }
}
