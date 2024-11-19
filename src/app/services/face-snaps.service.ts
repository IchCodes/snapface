import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {SnapType} from '../models/snap-type.type';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
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
    ).withLocation('Montagne'),new FaceSnap(
      'Coucher de soleil',
      'Un magnifique coucher de soleil sur la plage',
      'https://cdn.pixabay.com/photo/2023/02/02/10/02/sunset-7762468_640.jpg',
      new Date(),
      226
    )
  ];

  getFaceSnaps() {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType) {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }
}
