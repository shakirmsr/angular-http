import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Phones } from './phones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularRestApi';
  phones: Phones[]= [];
  headers:any;
  constructor(private api: ApiServiceService){

  }

  ngOnInit(){
    console.log(this.api.getSmartphones());
  }
  ngOnChanges(){
    this.smartPhones();
  }

  smartPhones(){
    
    // this.api.getSmartphones().subscribe(
    //   data => {
    //   for (const d of (data as any)) {
    //         this.phones.push({
    //           name: d.name,
    //           price: d.price
    //         });
    //       }
    //   console.log(this.phones);
      
    // });
    this.api.getSmartphones().subscribe(data =>{
      console.log(data);
      const keys = data.headers.keys();
      console.log(keys);
      this.headers = keys.map(key =>
        `${key}: ${data.headers.get(key)
      }`);
      console.log(this.headers);
      for(const item of data.body){
        this.phones.push(item)
      }
      console.log(this.phones);
      
    })
    
    // this.api.getSmartphones().subscribe(data => {
    //   this.phones = data;
    //   console.log(this.phones);
      
    // })
  }
}
