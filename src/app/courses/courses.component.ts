import { Component, OnInit } from '@angular/core';
import { LevelService } from '../services/level.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  levels: number[];

  constructor(private levelService: LevelService) { }

  ngOnInit(): void {
    this.levels = this.levelService.getLevel();
  }

}
