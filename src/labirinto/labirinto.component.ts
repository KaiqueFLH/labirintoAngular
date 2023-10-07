import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-labirinto',
  templateUrl: './labirinto.component.html',
  styleUrls: ['./labirinto.component.css']
})
export class LabirintoComponent implements OnInit {
  labirinto: boolean[][] = [];
  personagemPosicao: { x: number, y: number } = { x: 0, y: 0 };

  ngOnInit(): void {
    this.gerarLabirinto();
  }

  gerarLabirinto(): void {
    const layout = [
      [false, false, true, true, true, true, true, true, true, true, true],
      [true, false, true, false, false, false, false, false, false, false, true],
      [true, false, true, false, true, true, true, true, true, false, true],
      [true, false, false, false, true, false, false, false, false, false, true],
      [true, true, true, false, true, true, true, true, true, true, true],
      [false, false, false, false, false, false, false, false, false, true, true],
      [false, true, true, true, true, true, true, true, true, true, true],
      [false, false, false, false, false, true, true, false, false, false, true],
      [false, true, true, true, true, true, true, true, true, false, true],
      [false, false, false, false, false, false, false, false, false, false, true],
      [true, true, true, true, true, true, true, true, true, false, true],
      [true, false, false, false, false, false, false, false, false, false, true],
      [true, false, true, false, true, true, true, true, true, false, true],
      [true, false, true, false, true, false, false, false, false, false, true],
      [true, true, true, false, true, true, true, true, true, true, true],
      [true, false, true, false, false, false, false, false, false, false, true],
      [true, false, true, false, true, true, true, true, true, false, true],
      [true, false, false, false, false, false, false, false, true, false, true],
      [true, true, true, true, true, true, true, true, true, false, true],
    ];

    this.labirinto = layout;
    this.personagemPosicao = { x: 0, y: 0 };
  }

  reiniciar(): void {
    this.gerarLabirinto();
  }

  @HostListener('window:keydown', ['$event'])
  moverPersonagem(event: KeyboardEvent): void {
    const tecla = event.key.toLowerCase();

    switch (tecla) {
      case 'a':
        if (this.podeMover(this.personagemPosicao.x - 1, this.personagemPosicao.y)) {
          this.personagemPosicao.x--;
        }
        break;
      case 'w':
        if (this.podeMover(this.personagemPosicao.x, this.personagemPosicao.y - 1)) {
          this.personagemPosicao.y--;
        }
        break;
      case 'd':
        if (this.podeMover(this.personagemPosicao.x + 1, this.personagemPosicao.y)) {
          this.personagemPosicao.x++;
        }
        break;
      case 's':
        if (this.podeMover(this.personagemPosicao.x, this.personagemPosicao.y + 1)) {
          this.personagemPosicao.y++;
        }
        break;
    }
  }


  podeMover(x: number, y: number): boolean {
    if (x >= 0 && x < this.labirinto.length && y >= 0 && y < this.labirinto[0].length) {
      if (!this.labirinto[x][y]) {


        return true;
      }
    }

    if (this.verificaVitoria(x, y)) {
      alert("Você venceu!");  
      this.gerarLabirinto();
    }
    return false;
  }

  verificaVitoria(x: number, y: number): boolean {
    if (x > this.labirinto.length-1) {
      return true
    }

    return false;
  }
}
