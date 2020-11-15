import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  info = "Creamos elAwayo para que los Emprendedores, Pequeños y Medianos Productores tengan presencia en redes sociales y puedan ofrecer sus productos en nuestras plataformas digitales ";
  constructor() { 
  
  }

  ngOnInit(): void {
  }
  
}
