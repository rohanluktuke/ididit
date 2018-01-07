import { Component } from '@angular/core';
import { AccomplishmentService } from './accomplishment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccomplishmentService]
})
export class AppComponent {
  title = 'app';
  loadedFeature = 'create';

  onNavigate(selection: string) {
    this.loadedFeature = selection;
  }
}
