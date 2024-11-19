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
      'https://cdn.pixabay.com/photo/2016/05/17/22/16/baby-1399332_640.jpg',
      new Date(),
      8
    );
    this.myOtherSnap = new FaceSnap(
      'Vue de la montagne',
      'Un superbe paysage montagneux',
      'https://cdn.pixabay.com/photo/2021/10/11/18/58/lake-6701636_1280.jpg',
      new Date(),
      15
    );

    this.myLastSnap = new FaceSnap(
      'Coucher de soleil',
      'Un magnifique coucher de soleil sur la plage',
      'https://cdn.pixabay.com/photo/2023/02/02/10/02/sunset-7762468_640.jpg',
      new Date(),
      22
    );

  }
}
