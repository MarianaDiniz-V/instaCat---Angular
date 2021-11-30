import { Injectable } from '@angular/core';

import { data } from 'src/shared/models/photo.module';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  ArraydeGatinho: Array<data> = [
    { img: "https://cdn2.thecatapi.com/images/2fg.jpg", modal: false, like: false, name: "martin2", likes: 1314 },
    { img: "https://cdn2.thecatapi.com/images/2o6.jpg", modal: false, like: false, name: "pandora.lps", likes: 218 },
    { img: "https://cdn2.thecatapi.com/images/4rk.jpg", modal: false, like: false, name: "joy_123", likes: 96 },
    { img: "https://cdn2.thecatapi.com/images/5ot.jpg", modal: false, like: false, name: "neves.leopoldo", likes: 112 },
    { img: "https://cdn2.thecatapi.com/images/646.jpg", modal: false, like: false, name: "lukedennis", likes: 75 },
    { img: "https://cdn2.thecatapi.com/images/6ob.jpg", modal: false, like: false, name: "baunilha", likes: 23 },
    { img: "https://cdn2.thecatapi.com/images/6qh.jpg", modal: false, like: false, name: "jack_peralta", likes: 88 },
    { img: "https://cdn2.thecatapi.com/images/6u8.jpg", modal: false, like: false, name: "algodao_2021", likes: 254 },
    { img: "https://cdn2.thecatapi.com/images/7di.jpg", modal: false, like: false, name: "rubensz", likes: 268 },
    { img: "https://cdn2.thecatapi.com/images/7l3.jpg", modal: false, like: false, name: "faisca.green", likes: 418 },
    { img: "https://cdn2.thecatapi.com/images/8fe.jpg", modal: false, like: false, name: "esmeraldaa", likes: 402 },
    { img: "https://cdn2.thecatapi.com/images/8jb.jpg", modal: false, like: false, name: "jolie.neves", likes: 107 },
    { img: "https://cdn2.thecatapi.com/images/8oc.jpg", modal: false, like: false, name: "vinicaramelo", likes: 59 },
    { img: "https://cdn2.thecatapi.com/images/8pg.jpg", modal: false, like: false, name: "eujimmy", likes: 553 },
    { img: "https://cdn2.thecatapi.com/images/8tq.jpg", modal: false, like: false, name: "benjamin.1", likes: 12 },
    { img: "https://cdn2.thecatapi.com/images/9fn.jpg", modal: false, like: false, name: "perola.cat", likes: 192 },
    { img: "https://cdn2.thecatapi.com/images/eie.jpg", modal: false, like: false, name: "cinderela", likes: 218 },
    { img: "https://cdn2.thecatapi.com/images/eev.jpg", modal: false, like: false, name: "ramana", likes: 317 },
    { img: "https://cdn2.thecatapi.com/images/7B3W2JCEl.jpg", modal: false, like: false, name: "conrado", likes: 1911 },
    { img: "https://cdn2.thecatapi.com/images/rsBOTSbAm.jpg", modal: false, like: false, name: "teddy.ly", likes: 3022 },
    { img: "https://cdn2.thecatapi.com/images/7tzyVT8_f.jpg", modal: false, like: false, name: "anya.kathy", likes: 1003 },
    { img: "https://cdn2.thecatapi.com/images/Sh4tWXRtw.jpg", modal: false, like: false, name: "phelps.14", likes: 711 },
    { img: "https://cdn2.thecatapi.com/images/KOvZKFRjn.jpg", modal: false, like: false, name: "bobcosta", likes: 36 }

  ]

  constructor() { }

  getCats() {
    return this.ArraydeGatinho;
  }
}
