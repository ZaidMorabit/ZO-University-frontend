import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { AuthService } from 'src/app/services/auth.service';
import { CourseService } from 'src/app/services/course.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  level: number;
  levels: number[];
  courses: Course[];
  subscription: Subscription;
  isAuth: boolean;


  constructor(private courseService: CourseService, private authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.levels =  this.courseService.getLevels();
    this.route.params.subscribe(param => {
      if(param['id'] !== undefined){
        this.level = +param['id'];
        this.subscription = this.courseService.fetchCourses().subscribe(()=>{
          this.courses = this.courseService.getCoursesByLevel(this.level);
        });
      }else{
        this.subscription = this.courseService.fetchCourses().subscribe(()=>{
          this.courses = this.courseService.getCourses();
        });
      }
    });

    this.isAuth = this.authService.getStatus();
    this.authService.authChanged.subscribe(isAuth =>{
      this.isAuth = isAuth;
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
