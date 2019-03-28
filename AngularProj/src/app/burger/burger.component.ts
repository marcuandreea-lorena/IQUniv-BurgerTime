import { Component, OnInit } from '@angular/core';
import {trigger, state, style, query, stagger, transition, animate, keyframes} from '@angular/animations';
import {ReversePipe} from 'ngx-pipes';
import { findLast } from '@angular/compiler/src/directive_resolver';
import { loadQueryList } from '@angular/core/src/render3';


@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css'],
  providers: [ReversePipe],
  animations: [
    trigger('layersAnimation', [
      transition('* => *', [
        query('div', style({ transform: 'translateX(-2000%)'})),
        query('div',
        stagger('300ms', [
          animate('600ms', style({transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})
export class BurgerComponent implements OnInit {

  top;
  constructor() { }

  ngOnInit() {
  }

  hoverEvent() {
   this.top.addClass('jello');
  }

}
