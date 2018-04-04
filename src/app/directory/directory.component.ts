import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  ninjas = [
    {name: "Max", belt: "black"},
    {name: "Yoshi", belt: "red"},
    {name: "Ryu", belt: "purple"}
  ];

  ngOnInit() {
  }

}
