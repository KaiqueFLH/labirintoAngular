import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labirinto',
  templateUrl: './labirinto.component.html',
  styleUrls: ['./labirinto.component.css']
})
export class LabirintoComponent implements OnInit {
  labirinto: boolean[][] = [];

  constructor() { }

  ngOnInit(): void {
    this.gerarLabirinto(18, 16); // Altere as dimensões do labirinto conforme necessário
  }

  gerarLabirinto(rows: number, cols: number): void {
    const layout = [
      [false, false, true, true, true, true, true, true, true, true,true],
      [true, false, true, false, false, false, false, false, false, false,true],
      [true, false, true, false, true, true, true, true, false, true,false],
      [true, false, false, false, true, false, false, true, false, true,false],
      [true, true, true, false, true, true, true, false, false, true,true],
      [true, false, false, false, false, false, false, true, false, false,true],
      [true, false,false, false, false, false, false, true, true, false,true],
      [true, false, false, false, false, false, false, false, false, false,false],
      [true, true, true, true, true, true, true, true, true, true,false],
      [false, false, false, false, false, false, false, false, false, false,false],
    ];
    
    this.labirinto = layout;
  }
}