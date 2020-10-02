import { Component, OnInit } from '@angular/core';
import { delay, take } from 'rxjs/operators';
import { ListaService } from '../lista/lista.service';

@Component({
  selector: 'app-segunda-tela',
  templateUrl: './segunda-tela.component.html',
  styleUrls: ['./segunda-tela.component.css']
})
export class SegundaTelaComponent implements OnInit {

  constructor(private listaService: ListaService) { }

  ngOnInit(): void {
    this.getRegistro();
  }
  getRegistro() {
    let register;
    this.listaService
      .getRegistros()
      .pipe(delay(2000), take(1))
      .subscribe((data: any[]) => {
        this.registros = data;
      });
  }
  oNovo2;
  registros;
  f(obj){
    console.log(obj);
  }
}
