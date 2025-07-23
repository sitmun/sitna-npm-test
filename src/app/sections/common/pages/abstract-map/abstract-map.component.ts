import {Component, OnDestroy, OnInit} from '@angular/core';
import { Map as SitnaMap } from 'api-sitna';

@Component({
  selector: 'app-abstract-map',
  templateUrl: './abstract-map.component.html',
  styleUrls: ['./abstract-map.component.scss']
})
export class AbstractMapComponent implements OnInit, OnDestroy {

  ngOnInit() {
    // Da problemas al hacer esta invocación.
    const map = new SitnaMap('mapa', {})
  }

  ngOnDestroy() {
    // ...
  }

}
