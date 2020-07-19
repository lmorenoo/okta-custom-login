import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-code-learn',
  templateUrl: './code-learn.component.html',
  styleUrls: ['./code-learn.component.scss']
})
export class CodeLearnComponent implements OnInit {

  constructor(private oktaAuth: OktaAuthService) { }

  async ngOnInit() {

  }
}
