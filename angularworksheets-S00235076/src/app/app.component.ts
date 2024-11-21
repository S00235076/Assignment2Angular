import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GradeHistoryComponent } from './grade-history/grade-history.component';
import {MatToolbarModule} from '@angular/material/toolbar'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule,GradeHistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularWS';
}
