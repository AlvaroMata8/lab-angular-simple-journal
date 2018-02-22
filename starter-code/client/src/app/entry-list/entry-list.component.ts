import { Component, OnInit } from '@angular/core';
import { PennyworthService } from 'services/alfredPennyworth.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [PennyworthService]
})

export class EntryListComponent implements OnInit {

  entriesList: Array<any>;
  constructor( private pS: PennyworthService) { 
    this.pS.getList().subscribe( list => this.entriesList = list);
  }

  ngOnInit() {
  }

}
