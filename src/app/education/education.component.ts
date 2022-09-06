import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let edu1 ={
      fecha: "2015-2020",
      grado_educativo:"Licenciado en ingenieria de software",
      universidad: "Universidad Veracruzana"
  };

  let edu2 ={
    fecha: "2019-2021",
    grado_educativo:"Maestria en Inteligencia artificial",
    universidad: "Universidad Veracruzana"
};

this.education.push(edu1);
this.education.push(edu2);

}
}
