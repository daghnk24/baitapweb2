import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component',
  standalone: false,
  styleUrl: './binding-event-component.css',
  templateUrl: './binding-event-component.html',
})
export class BindingEventComponent {
  public hsa:number=5
  public hsb:number=7
  public result:string="Kết quả ở đây"
  giaiPtb1(a:string,b:string) {
    this.hsa=parseFloat(a)
    this.hsb=parseFloat(b)
    if(this.hsa==0){
      if(this.hsb==0){
        this.result="tùm lum nghiệm"
      }else if(this.hsb!=0){
        this.result="<font color='red'>Phương trình vô nghiệm</font>"
      }
    }else{
      let x:number=-this.hsb/this.hsa
      this.result="No x="+x
    }
  }
}