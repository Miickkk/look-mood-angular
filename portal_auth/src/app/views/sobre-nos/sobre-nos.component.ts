import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/templates/header/header.component';
import { FooterComponent } from 'src/app/templates/footer/footer.component';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.scss'],
  standalone: true,
  imports: [
    CommonModule,              // 🔹 necessário para *ngFor, *ngIf
    HeaderComponent,   // 🔹 seu header
    FooterComponent            // 🔹 seu footer
  ]
})
export class SobreNosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setupCanvas();
  }

  // Função para configurar o Canvas com animação de ondas
  setupCanvas(): void {
    const canvas = document.getElementById('bgCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width: number, height: number, t = 0;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
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
    }
    draw();
  }
}
