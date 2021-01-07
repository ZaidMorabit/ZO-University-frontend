import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  level: number;
  levels: number[];
  courses: Course[];
  subscription: Subscription;


  constructor(private courseService: CourseService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.levels =  this.courseService.getLevels();
    this.route.params.subscribe(param => {
      if(param['id'] !== undefined){
        this.level = +param['id'];
        this.courseService.fetchCourses().subscribe(()=>{
          this.courses = this.courseService.getCoursesByLevel(this.level);
        });
      }else{
        this.courseService.fetchCourses().subscribe(()=>{
          this.courses = this.courseService.getCourses();
        });
      }
    });
    
    
  }

}
