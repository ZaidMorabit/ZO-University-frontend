import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Course } from '../models/course.model';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  /*private courses = [
    {
      title: "Math",
      id: 1,
      level: 1
    },
    {
      title: "Physique",
      id: 2,
      level: 3
    },
    {
      title: "Chimie",
      id: 3,
      level: 5
    },
    {
      title: "Math",
      id: 1,
      level: 2
    },
    {
      title: "Physique",
      id: 2,
      level: 4
    },
    {
      title: "Chimie",
      id: 3,
      level: 3
    },
    {
      title: "Math",
      id: 1,
      level: 1
    },
    {
      title: "Physique",
      id: 2,
      level: 3
    },
    {
      title: "Chimie",
      id: 3,
      level: 5
    }
  ]*/

  private courses: Course[] = [];
  private url = "http://localhost:8080/university/rest/course/";
  coursesChanged = new Subject<Course[]>();

  constructor(private http: HttpClient) { }

  fetchCourses(){
    return this.http.get<Course[]>(this.url).pipe(tap(courses =>{
      this.courses = courses;
    }));
  }

  postCourse(course: {title: string, level: number}){
    this.http.post(this.url, course).subscribe(course =>{
      console.log(course);
      if(course != null){
        //this.courses.push(course);
        this.coursesChanged.next(this.getCourses());
      }
      
    })
  }

  getCourses(){
    return this.courses.slice();
  }

  getLevels(){
    return Array.from(new Set(this.courses.map(course => course.level))).sort();
  }

  getCoursesByLevel(level: number){
    return this.getCourses().filter(course => course.level === level);
  }

  getCourseById(id: number){
    return this.getCourses().find(course => course.id === id);
  }
}
