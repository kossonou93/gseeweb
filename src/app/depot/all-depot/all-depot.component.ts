import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Depot } from 'src/app/model/Depot';
import { DepotService } from 'src/app/services/depot.service';

@Component({
  selector: 'app-all-depot',
  templateUrl: './all-depot.component.html',
  styles: [
  ]
})
export class AllDepotComponent implements OnInit {

  public depots: Depot[];

  constructor(private depotService: DepotService) { }

  ngOnInit(): void {
    this.getDepots();
  }

  public getDepots(): void {
    this.depotService.getDepot().subscribe(
      (response: Depot[]) => {
        this.depots = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
