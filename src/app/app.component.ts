import {Component, OnInit} from '@angular/core';
import {FaceSnapComponent} from './face-snap/face-snap.component';
import {FaceSnap} from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Junayd mon fils ',
      'Mon fils ',
      'https://avatars.githubusercontent.com/u/1004983?v=4',
      new Date(),
      8
    );
    this.myOtherSnap = new FaceSnap(
      'Vue de la montagne',
      'Un superbe paysage montagneux',
      'https://cdn.pixabay.com/photo/2023/09/22/03/51/beautiful-8267949_1280.jpg',
      new Date(),
      15
    );

    this.myLastSnap = new FaceSnap(
      'Coucher de soleil',
      'Un magnifique coucher de soleil sur la plage',
      'https://cdn.pixabay.com/photo/2023/11/04/07/40/cat-8364405_1280.jpg',
      new Date(),
      22
    );

  }
}
