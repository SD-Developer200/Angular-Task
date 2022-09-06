import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-component',
  templateUrl: './middle-component.component.html',
  styleUrls: ['./middle-component.component.css']
})
export class MiddleComponentComponent implements OnInit {

  BookId = "1001";
  BookName = "THINK LIKE A MONK";
  BookAuthor = "Jay Shetty";
  BookStatus = "Available";


  btnToggle = true;

  constructor() { }

  ngOnInit(): void {
      setTimeout(() => {
        this.btnToggle = false
      }, 2000);
  }
  onToggle(){
    if(this.BookStatus == "Available") {
      this.BookStatus = " Not Available ";
    }
    else{
      this.BookStatus = "Available";
    }
  }


}
