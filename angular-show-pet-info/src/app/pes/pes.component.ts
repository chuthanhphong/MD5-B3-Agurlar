import { Component, OnInit } from '@angular/core';
import {Pes} from './pes';

@Component({
  selector: 'app-pes',
  templateUrl: './pes.component.html',
  styleUrls: ['./pes.component.css']
})
export class PesComponent implements OnInit {
pet:Pes ={
  name : 'pupple',
  image: 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg'
}
  constructor() { }

  ngOnInit() {
  }

}
