import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sol = "https://solarvalle.com.br/wp-content/themes/4up/files/img/icone-sol.png";
  lua = "https://images.vexels.com/media/users/3/153630/isolated/preview/f157393ba1bbd3471c532c9516b894f2-icone-plano-de-lua-crescente.png";

  light = true;
  tema = this.sol;

  trocarTema() {
    this.light = !this.light
    if (this.light) {
      this.tema = this.sol;
    } else {
      this.tema = this.lua;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
