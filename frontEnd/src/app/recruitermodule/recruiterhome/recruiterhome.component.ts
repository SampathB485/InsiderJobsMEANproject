import { Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recruiterhome',
  templateUrl: './recruiterhome.component.html',
  styleUrls: ['./recruiterhome.component.css']
})
export class RecruiterhomeComponent implements OnInit {
  username!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void { //this is for placing the user name at the greeting message
    this.username = this.route.snapshot.paramMap.get('username')!;
  }
}




