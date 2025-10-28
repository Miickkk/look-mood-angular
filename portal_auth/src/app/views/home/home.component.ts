import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private apiUrl = 'http://localhost:3004';
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.iniciarCanvas();
    this.configurarAvatarEDropdown();
  }

  // === Função do Canvas Animado ===
  private iniciarCanvas() {
    const canvas = document.getElementById('bgCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
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

  // === Avatar e dropdown ===
  private configurarAvatarEDropdown() {
    const avatar = document.getElementById('user-avatar') as HTMLImageElement;
    const dropdown = document.getElementById('dropdown-menu');

    // Carregar avatar salvo no localStorage
    const saved = JSON.parse(localStorage.getItem('profileData') || '{}');
    if (avatar && saved?.pic) avatar.src = saved.pic;

    // Abrir/fechar dropdown
    if (avatar && dropdown) {
      avatar.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('active');
      });

      document.addEventListener('click', () => dropdown.classList.remove('active'));
    }
  }
}
