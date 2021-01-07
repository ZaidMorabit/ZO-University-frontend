import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  
  course: Course;

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.course = this.courseService.getCourseById(+params['id']);
    })
  }

}
