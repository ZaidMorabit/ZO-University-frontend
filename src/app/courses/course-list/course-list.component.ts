import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  level:number;
  courses: Course[];
  

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(param =>{
      this.level = +param['id'];
      this.courses = this.courseService.getCoursesByLevel(this.level);
    })
  }

}
