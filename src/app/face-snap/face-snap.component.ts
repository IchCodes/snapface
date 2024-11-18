import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  created!: Date;
  snaps!: number;

  ngOnInit() {
    this.title = 'Junayd';
    this.description = 'Mon fils';
    this.created = new Date();
    this.snaps = 0;
  }
}
