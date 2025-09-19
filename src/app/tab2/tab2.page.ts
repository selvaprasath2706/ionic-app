import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFabButton,
  IonIcon,
  IonFab,
  IonImg,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/angular/standalone';

import { PhotoService } from '../services/photo';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFabButton,
    IonIcon,
    IonFab,
    IonImg,
    IonCol,
    IonGrid,
    IonRow,
  ],
})
export class Tab2Page {
  constructor(public photoService: PhotoService) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async ngOnInit() {
  await this.photoService.loadSaved();
}
}
