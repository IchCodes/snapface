import {Component, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {FaceSnapComponent} from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps!: FaceSnap[];

  ngOnInit() {

    this.faceSnaps = [
      new FaceSnap(
        'Junayd mon fils ',
        'Mon fils ',
        'https://cdn.pixabay.com/photo/2016/05/17/22/16/baby-1399332_640.jpg',
        new Date(),
        8
      ),new FaceSnap(
        'Vue de la montagne',
        'Un superbe paysage montagneux',
        'https://cdn.pixabay.com/photo/2021/10/11/18/58/lake-6701636_1280.jpg',
        new Date(),
        15
      ),new FaceSnap(
        'Coucher de soleil',
        'Un magnifique coucher de soleil sur la plage',
        'https://cdn.pixabay.com/photo/2023/02/02/10/02/sunset-7762468_640.jpg',
        new Date(),
        226
      )
    ];

    this.faceSnaps[1].setLocation('Montagne');
  }

}
