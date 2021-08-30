import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe;

  mensaje:string = '';
  

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){

    this.heroesService.getSugerencias( this.termino.trim()).subscribe(heroes => {
      this.heroes = heroes
      if(this.heroes.length === 0){
        this.mensaje = `No se encontró nada con el término ${this.termino}`
      }else{
        this.mensaje = '';
      }
    });


  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent){

    // TODO: validar si es un string vacio

    if(!event.option.value){
      return
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroePorId( heroe.id! ).subscribe(heroe => this.heroeSeleccionado = heroe)
   
  }

}
