import { Component,  HostListener  } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  dato =true;
  page1 = true;
  page2 = false;
  cantidades = '';
  cantobj:any[] = [];
  correctoP = 0;
  sig =true;
  cant = 0;
  suma:number = 0;
  total = 0;
  banco:number = 0;
  viewBanco = true;
  viewTotal = false;
  add(){
    this.cantobj.push({
      cantidad: this.cantidades,
      check: 'animated-button1'
    });
    this.cantidades = '';
  }

  siguiente(){
    //for(let i=0; i < this.cantobj.length; i++ ){
      this.cantobj.reverse();
      let a = this.cantobj.length -1 ;
      this.cant = this.cantobj.length -1 ;
      this.cantobj[a].check = 'animated-button'
      this.page1 = false;
      this.page2 = true;
    //}
  }

  correcto(){
     if(this.cant == 0){
       console.log('entro aqui');
       this.cant = this.cantobj.length -1;
        let a = this.cantobj.length -1;
        for(let i = 0; i < this.cantobj.length; i++) this.cantobj[i].check = 'animated-button1';
        this.cantobj[a].check = 'animated-button'
        this.banco = this.cantobj[0].cantidad;
        this.total = parseInt(this.total) + parseInt(this.banco);
        this.suma = 0;
        this.banco = 0;
         this.viewBanco = false;
        this.viewTotal = true;
        ///
         
     }
     else{
      this.cant--;
      console.log(this.cant);
      this.cantobj[this.cant].check = 'animated-button'
      this.suma = this.cantobj[this.cant + 1].cantidad;
      let a = this.cant +1
      this.cantobj[a].check = 'animated-button1'
      console.log(this.suma);
     }
  }
   @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) { 
    console.log(event.key);
    if(event.key == 'q'){//Q es acertada y sube uno
        this.correcto()
    }
    if(event.key == 'w'){//W es banco
        this.cant = this.cantobj.length -1 ;
        let a = this.cantobj.length -1;
        for(let i = 0; i < this.cantobj.length; i++) this.cantobj[i].check = 'animated-button1';
        this.cantobj[a].check = 'animated-button'
        this.banco = parseInt(this.banco) + parseInt(this.suma);
        console.log(this.banco)
    }
    if(event.key == 'r' ){//finalizar ronda
        this.cant = this.cantobj.length -1;
        let a = this.cantobj.length -1;
        for(let i = 0; i < this.cantobj.length; i++) this.cantobj[i].check = 'animated-button1';
        this.cantobj[a].check = 'animated-button'
        this.total = parseInt(this.total) + parseInt(this.banco);
        this.suma = 0;
        this.banco = 0;
        ///
        this.viewBanco = false;
        this.viewTotal = true;
    }
    if(event.key == 'e'){ ///E pregunta incorrecta
      this.cant = this.cantobj.length -1 ;
        let a = this.cantobj.length -1;
        for(let i = 0; i < this.cantobj.length; i++) this.cantobj[i].check = 'animated-button1';
        this.cantobj[a].check = 'animated-button'
        this.suma = 0;
        //this.banco = 0;
    }
    if(event.key == 't'){
       this.viewBanco = true;
        this.viewTotal = false;
    }
  }
}
