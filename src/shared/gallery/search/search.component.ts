import { Component, OnInit } from '@angular/core';
import { data } from 'src/shared/models/photo.module';
import { GalleryService } from 'src/shared/services/gallery.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ArraydeGatinho: Array<data> = []

  ArrayPhotos: Array<data> = [];

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

  abrirModal(photo: data) {
    photo.modal = !photo.modal
  }
  buscarGatinho(event: any) {
    if (event.code === 'Enter') {
      const filtrados = this.ArraydeGatinho.filter(cat => cat.name.includes(event.target.value))
      this.ArrayPhotos = filtrados;
      event.target.value = ''
    }
  }

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.ArraydeGatinho = this.galleryService.getCats();
    this.ArrayPhotos = this.galleryService.getCats();
  }

}

