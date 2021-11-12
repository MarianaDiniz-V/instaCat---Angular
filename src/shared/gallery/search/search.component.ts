import { Component, OnInit } from '@angular/core';
import { data } from 'src/shared/models/photo.module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ArrayPhotos: Array<data> = [
    { img: "https://cdn2.thecatapi.com/images/2fg.jpg" },
    { img: "https://cdn2.thecatapi.com/images/2o6.jpg" },
    { img: "https://cdn2.thecatapi.com/images/4rk.jpg" },
    { img: "https://cdn2.thecatapi.com/images/5ot.jpg" },
    { img: "https://cdn2.thecatapi.com/images/646.jpg" },
    { img: "https://cdn2.thecatapi.com/images/6ob.jpg" },
    { img: "https://cdn2.thecatapi.com/images/6qh.jpg" },
    { img: "https://cdn2.thecatapi.com/images/6u8.jpg" },
    { img: "https://cdn2.thecatapi.com/images/7di.jpg" },
    { img: "https://cdn2.thecatapi.com/images/7l3.jpg" },
    { img: "https://cdn2.thecatapi.com/images/8fe.jpg" },
    { img: "https://cdn2.thecatapi.com/images/8jb.jpg" },
    { img: "https://cdn2.thecatapi.com/images/8oc.jpg" },
    { img: "https://cdn2.thecatapi.com/images/8pg.jpg" },
    { img: "https://cdn2.thecatapi.com/images/8tq.jpg" },
    { img: "https://cdn2.thecatapi.com/images/9fn.jpg" },
    { img: "https://cdn2.thecatapi.com/images/eie.jpg" },
    { img: "https://cdn2.thecatapi.com/images/eev.jpg" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

