import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-admin-code-learn',
  templateUrl: './admin-code-learn.component.html',
  styleUrls: ['./admin-code-learn.component.scss']
})
export class AdminCodeLearnComponent implements OnInit {

  constructor(private oktaAuth: OktaAuthService) { }

  async ngOnInit() {
  }
}
