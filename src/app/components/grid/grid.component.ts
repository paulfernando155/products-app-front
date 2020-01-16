import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() products: Array<string> = ['asdadsadasd', 'asd', '1232131', '12312321'];
  @Input() cols: number;
  @Input() onClickCard: Function;

  constructor() { }

  ngOnInit() {
  }

}
