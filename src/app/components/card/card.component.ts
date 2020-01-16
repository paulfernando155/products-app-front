import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product: string;
  @Input() onClickCard: Function;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
