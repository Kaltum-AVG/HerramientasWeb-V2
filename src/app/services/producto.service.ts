import { Injectable } from '@angular/core';
import { ErrorsService } from './tools/errors.service';
import { ValidatorService } from './tools/validator.service';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private validatorService: ValidatorService,
    private errorService: ErrorsService,
  ) { }

  public esquemaProduct(){
    return {
      'id': '',
      'nombre_producto': '',
      'precio': '',
      'departamento': '',
    }
  } 

  //Función para validar datos del producto
  public validarProducto(data: any){
    console.log("Validando producto... ", data);
    let error: any = [];

    if(!this.validatorService.required(data["id"])){
      error["id"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["nombre_producto"])){
      error["nombre_producto"] = this.errorService.required;
    }else if(!this.validatorService.min(data["nombre_producto"], 3)){
      error["nombre_producto"] = this.errorService.min(3);
      alert("La longitud de caracteres del nombre es menor, deben ser 3");
    }else if(!this.validatorService.max(data["nombre_producto"], 20)){
      error["nombre_producto"] = this.errorService.max(20);
      alert("La longitud de caracteres del nombre es mayor, deben ser 20");
    }

    if(!this.validatorService.required(data["precio"])){
      error["precio"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["departamento"])){
      error["departamento"] = this.errorService.required;
    }else if(!this.validatorService.min(data["departamento"], 3)){
      error["departamento"] = this.errorService.min(3);
      alert("La longitud de caracteres del departamento es menor, deben ser 3");
    }else if(!this.validatorService.max(data["departamento"], 20)){
      error["departamento"] = this.errorService.max(20);
      alert("La longitud de caracteres del departamento es mayor, deben ser 20");
    }

    return error;
    
  }
}