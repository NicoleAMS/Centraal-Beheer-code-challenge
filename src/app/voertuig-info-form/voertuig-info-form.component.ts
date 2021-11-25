import { Component, OnInit } from '@angular/core';
import { Voertuig } from '../models/voertuig.model';
import { VoertuigInfoService } from '../services/voertuig-info.service';

@Component({
  selector: 'app-voertuig-info-form',
  templateUrl: './voertuig-info-form.component.html',
  styleUrls: ['./voertuig-info-form.component.css']
})
export class VoertuigInfoFormComponent implements OnInit {

  voertuigen: Voertuig[] = [];
  gekozenVoertuig!: Voertuig;
  index: number = 0;
  kenteken: string = '';
  kentekenGeldig: boolean = true;

  constructor(private voertuigService: VoertuigInfoService) { }

  ngOnInit(): void {
    this.voertuigen = this.voertuigService.getVoertuigen();
    this.gekozenVoertuig = this.voertuigen[0];
  }

  selectVoertuig(event: any) {
    this.index = event.target.options['selectedIndex'];
    this.gekozenVoertuig = this.voertuigService.getVoertuig(this.index);
  }

  onBlur(event: any) {
    this.formatKenteken(event);
  }

  formatKenteken(event: any) {
    // haalt streepjes weg die gebruiker ingevoerd heeft zodat het kenteken opnieuw geformatteerd kan worden
    let kenteken = event.target.value.split('-').join('');

    let formattedKenteken: string = '';

    // voegt streepje tussen cijfers en letters toe
    let isLetter: boolean = isNaN(kenteken[0]);
    for (let i = 0; i < kenteken.length; i++) {
      if (isNaN(kenteken[i]) !== isLetter) {
        formattedKenteken += `-${kenteken[i]}`;
        isLetter = !isLetter;
      } else {
        formattedKenteken += kenteken[i];
      }
    }

    // voegt streepje tussen vier opeenvolgende letters toe
    let pattern = kenteken.match(/[a-zA-Z]{4}/);
    if (pattern) {
      let chars = pattern[0];
      formattedKenteken = formattedKenteken.replace(chars, `${chars[0]}${chars[1]}-${chars[2]}${chars[3]}`);
    }

    this.kenteken = formattedKenteken;
  }

}
