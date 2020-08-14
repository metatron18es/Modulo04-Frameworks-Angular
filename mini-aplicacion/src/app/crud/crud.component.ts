import { Component, OnInit } from '@angular/core';
import { MemberEntity } from "src/app/model/MemberEntity";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  members: MemberEntity[] = [];
  newMember: MemberEntity;

  constructor() { 
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => this.members = json);

      this.newMember = {
        id: '',
        login: '',
        avatar_url: ''
      }

  }

  ngOnInit(): void {
  }

  add() {
    this.members.push(this.newMember);
    this.newMember = {
      id: '',
      login: '',
      avatar_url: ''
    }
  }
}
