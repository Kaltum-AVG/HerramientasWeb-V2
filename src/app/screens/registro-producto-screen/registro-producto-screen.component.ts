import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDatepicker } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';


declare var $:any;

@Component({
  selector: 'app-registro-producto-screen',
  templateUrl: './registro-producto-screen.component.html',
  styleUrls: ['./registro-producto-screen.component.scss']
})

  export class RegistroProductoScreenComponent implements OnInit {
  
    //Aquí van las variables
    public editar:boolean = false;
    public producto: any = {};
    //Para contraseñas
    public hide_1: boolean = false;
    public hide_2: boolean = false;
    public inputType_1: string = 'password';
    public inputType_2: string = 'password';
    //Para detectar errores
    public errors:any ={};
  
  
    constructor(
      private location: Location,
      private productoService: ProductoService,
      private router: Router) 
      {
      
    }
    ngOnInit(): void {
      this.producto = this.productoService.esquemaProduct();
      console.log("Producto: ", this.producto);
    }
    
    public regresar(){
      this.location.back();
    }
  
    public home(){
      this.router.navigate(['home']);
    }
  
    public registrar(){
      //Validar
      this.errors = [];
  
      this.errors = this.productoService.validarProducto(this.producto);
      if(!$.isEmptyObject(this.errors)){
        //Pasa la validación y sale de la función
        return false;
      }
    
      alert("Todo chido vamos a registrar el producto");
    }
  
  }