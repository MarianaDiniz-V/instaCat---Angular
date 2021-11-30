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

  title = "teste local"

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

