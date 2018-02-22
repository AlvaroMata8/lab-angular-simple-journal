import { Component, OnInit } from '@angular/core';
import { PennyworthService } from 'services/alfredPennyworth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [PennyworthService]
})

export class SingleEntryComponent implements OnInit {
  entry:any;
  entries: Array<any>;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private pS:PennyworthService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEntryId(params['id']);
    });
  }

  getEntryId(id) {
    this.pS.get(id)
      .subscribe((entry) => {
        this.entry = entry;
      });
  }

}
