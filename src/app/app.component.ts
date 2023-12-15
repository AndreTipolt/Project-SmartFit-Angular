import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from './types/Location.interface';
import { GetUnitsService } from './services/get-units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Projeto-SmartFit-Angular';

  showList = new BehaviorSubject(false);
  unitList: Location[] = [];

  constructor (private unitService: GetUnitsService){

  }

  onSubmit(){
    this.showList.next(true);
    this.unitList = this.unitService.getFilteredUnits();
  }
}
