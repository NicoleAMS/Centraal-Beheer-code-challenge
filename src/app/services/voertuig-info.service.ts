import { Voertuig } from "../models/voertuig.model";

export class VoertuigInfoService {

  private voertuigen: Voertuig[] = [
    {
      'id': 0,
      'type': 'auto',
      'subtypes': ['Hatchback', 'Sedan', 'Station', 'Cabriolet', 'Coupe', 'Multi Purpose Vehicle (MVP)', 'Terreinauto'],
      'imagePath': '/assets/auto.jpg'
    },
    {
      'id': 1,
      'type': 'motor',
      'subtypes': ['All-road', 'Naked', 'Enduro', 'Race', 'Toermotor', 'Chopper', 'Zijspan'],
      'imagePath': '/assets/motor.jpg'
    },
    {
      'id': 2,
      'type': 'scooter',
      'subtypes': [],
      'imagePath': '/assets/scooter.jpg'
    }
  ];

  getVoertuigen() {
    return this.voertuigen;
  }

  getVoertuig(index: number) {
    return this.voertuigen[index];
  }
}
