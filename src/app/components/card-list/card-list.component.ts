import { Component, Input, OnInit } from '@angular/core';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { Location } from 'src/app/types/Location.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() unitList: Location[] = [];

  unitsList: Location[] = [];

  constructor(private unitService: GetUnitsService) {

  }

  ngOnInit(): void {

    this.unitsList = this.unitService.getFilteredUnits();
    console.log(this.unitsList);
  }

}
