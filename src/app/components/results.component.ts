import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private giphySvc: GiphyService) { }

  images: string[] = [];
  sub$!: Subscription;


  ngOnInit(): void {
    this.sub$ = this.giphySvc.onNewSearch.subscribe(
        urls => {
          console.info("urls: " + urls.length)
          console.info(urls.join(' '))
          this.images = urls;
          console.info(this.images.length);
          console.info(this.images[0])
        }
    )
  }

}
