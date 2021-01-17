import { Component, OnInit } from '@angular/core';
export class Get{
  path:string='';
  Product_Name:string = "";
  Product_Code:number=0;
  Branch_Name:string="";
  Branch_Code:number=0;
  Shipping_Address:string="";

}

 const Item:Get[] = [
  {
    path :'https://picsum.photos/200',
    Product_Name:"ABC",
    Product_Code:9023802,
    Branch_Name:"MNC",
    Branch_Code:8947223,
    Shipping_Address:"XYZ"
  }
  ];

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  show = Item;
  constructor() { }

  ngOnInit(): void {
  }

  GetDetails(n:number){
    alert(this.show[n].Product_Name);
    alert(this.show[n].Product_Code);
    alert(this.show[n].Branch_Name);
    alert(this.show[n].Branch_Code);
    alert(this.show[n].Shipping_Address);
  }
}
