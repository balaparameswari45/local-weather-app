import { Component, Output, OnInit, EventEmitter } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: "app-city-search",
  templateUrl: "./citysearch.component.html",
  styleUrls: ["./citysearch.component.css"]
})
export class CitySearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('', [Validators.minLength(3)]);
  constructor() { }

  ngOnInit() {
    //listen for user typing in search box
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((searchValue: string) => {
      if (!this.search.invalid) {
        this.searchEvent.emit(searchValue);

      }
    });
  }
}