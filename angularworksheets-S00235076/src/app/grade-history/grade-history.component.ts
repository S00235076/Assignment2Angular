import { Component } from '@angular/core';
import { GradeHistory } from '../grade-history';
import { GradeHistoriesService } from '../grade-histories.service';
@Component({
  selector: 'app-grade-history',
  standalone: true,
  imports: [],
  templateUrl: './grade-history.component.html',
  styleUrl: './grade-history.component.css'
})
export class GradeHistoryComponent {
  gradeHistories : GradeHistory[] = [];
  message: string = '';
  
  constructor (private gradeHistoryService: GradeHistoriesService) {}

  ngOnInit(): void {
    this.gradeHistoryService.getGradeHistories().subscribe({
      next: (value: GradeHistory[]) => { console.log ('here'); this.gradeHistories = value},
      complete: () => console.log('gradeHistory service finished'),
      error: (message) => this.message = message
    }) 

}
}
