import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.courseService.postCourse(form.value)

  }

}
