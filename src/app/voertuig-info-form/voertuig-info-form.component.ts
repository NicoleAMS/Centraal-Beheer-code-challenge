import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voertuig-info-form',
  templateUrl: './voertuig-info-form.component.html',
  styleUrls: ['./voertuig-info-form.component.css']
})
export class VoertuigInfoFormComponent implements OnInit {

  // data
  voertuigen = [
    {
      'id': 0,
      'type': 'auto',
      'subtypes': ['Hatchback', 'Sedan', 'Station', 'Cabriolet', 'Coupe', 'Multi Purpose Vehicle (MVP)', 'Terreinauto'],
      'image': '/assets/auto.jpg'
    },
    {
      'id': 1,
      'type': 'motor',
      'subtypes': ['All-road', 'Naked', 'Enduro', 'Race', 'Toermotor', 'Chopper', 'Zijspan'],
      'image': '/assets/motor.jpg'
    },
    {
      'id': 2,
      'type': 'scooter',
      'subtypes': [],
      'image': '/assets/scooter.jpg'
    }
  ]
  gekozenVoertuig = this.voertuigen[0].type;
  index: number = 0;
  kenteken: string = '';
  kentekenGeldig: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  selectVoertuig(event: any) {
    this.index = event.target.options['selectedIndex'];
    this.gekozenVoertuig = event.target.value;
  }

}
