import { Component, Input, OnInit } from '@angular/core';
import { data } from 'src/shared/models/photo.module';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  modal?: data;

  heart = "https://toppng.com/public/uploads/thumbnail/coracao-115507187821dyvokausr.png";
  balloon = "https://cdn.icon-icons.com/icons2/1875/PNG/512/comment_120216.png";
  close = "https://static.vecteezy.com/system/resources/thumbnails/001/192/548/small/x.png";

  fecharModal(modal: any) {
    modal.modal = false;
  }

  liked(modal: any) {
    modal.like = !modal.like

    if (modal.like === true) {
      modal.likes += 1;
      return;
    }
    modal.likes -= 1;
  }

  caixaDeInput = false;

  mostrarInput() {
    this.caixaDeInput = !this.caixaDeInput
  }

  comentarios: Array<string> = []

  mostrarComentarios(event: any) {
    if (event.code === "Enter") {
      this.comentarios.push(event.target.value)
      event.target.value = '';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}