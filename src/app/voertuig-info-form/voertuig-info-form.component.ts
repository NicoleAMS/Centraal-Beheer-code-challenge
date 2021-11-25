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

}
