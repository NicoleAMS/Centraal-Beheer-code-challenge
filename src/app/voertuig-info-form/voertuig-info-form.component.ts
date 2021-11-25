import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {KentekenCheck} from 'rdw-kenteken-check';
import { Voertuig } from '../models/voertuig.model';
import { VoertuigInfoService } from '../services/voertuig-info.service';

@Component({
  selector: 'app-voertuig-info-form',
  templateUrl: './voertuig-info-form.component.html',
  styleUrls: ['./voertuig-info-form.component.css']
})
export class VoertuigInfoFormComponent implements OnInit {

  voertuigInfoForm!: FormGroup;
  voertuigen: Voertuig[] = [];
  gekozenVoertuig!: Voertuig;
  index: number = 0;
  kenteken: string = '';
  kentekenGeldig: boolean = true;

  constructor(private voertuigService: VoertuigInfoService) { }

  ngOnInit(): void {
    this.voertuigen = this.voertuigService.getVoertuigen();
    this.gekozenVoertuig = this.voertuigen[0];
    this.createForm();
  }

  selectVoertuig(event: any) {
    this.index = event.target.options['selectedIndex'];
    this.gekozenVoertuig = this.voertuigService.getVoertuig(this.index);
    this.voertuigInfoForm.controls['subtypes'].setValue(this.gekozenVoertuig.subtypes[0]);
  }

  onSubmit() {
    const formData = {
      type: this.voertuigInfoForm.value['type'],
      subtype: this.voertuigInfoForm.value['subtypes'],
      kenteken: this.kenteken
    }

    console.log(formData);
  }

  // zou een custom validator moeten zijn 
  validateKenteken(event: any) {
    let outputElm = event.target;
    const kt = new KentekenCheck(this.kenteken);
    outputElm.value = kt.formatLicense();
    this.kenteken = kt.newStr;
    this.kentekenGeldig = kt.valid;
  }

  formatKenteken(event: any) {
    this.kenteken = event.target.value;

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

  private createForm() {
    this.voertuigInfoForm = new FormGroup({
      type: new FormControl(this.gekozenVoertuig.type, Validators.required),
      subtypes: new FormControl(this.gekozenVoertuig.subtypes[0], Validators.required),
      kenteken: new FormControl('', Validators.required),
    });
  }

}
