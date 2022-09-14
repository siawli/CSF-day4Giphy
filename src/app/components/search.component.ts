import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Criteria } from '../models';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form!: FormGroup;
  api!: string

  constructor(private fb: FormBuilder, private giphySvc: GiphyService) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(api?: string) {
    return this.fb.group({
      api: this.fb.control<string>(api?.toString() || '', [Validators.required, Validators.minLength(10)]),
      search: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      limit: this.fb.control<number>(5, [Validators.required]),
      rating: this.fb.control<string>('g', [Validators.required])
    })
  }

  processForm() {
    const search: Criteria = this.form.value as Criteria;
    this.giphySvc.search(search)
      .then(result => {
        console.info(">>>>> succeeded in calling api")
        console.info(">>>> result: " + result)
        this.giphySvc.onNewSearch.next(result);
      }).catch(error => {
        console.info(">>>>> error: " + error);
      })
    this.form = this.createForm(search.api);
  }
}
