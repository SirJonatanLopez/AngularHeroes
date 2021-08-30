import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  img{
    width: 100%;
    border-radius: 5px;
  }
  `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor( private route:ActivatedRoute, private heroesService:HeroesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.heroesService.getHeroePorId(param.id).subscribe(heroe => this.heroe= heroe))
    // this.route.params.pipe(switchMap( ({id}) => this.heroesService.getHeroePorId(id))).subscribe(heroe => this.heroe = heroe);
  }



}
