import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses = [
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
  ]

  constructor() { }

  getCourses(){
    return this.courses.slice();
  }
  getCoursesByLevel(level: number){
    return this.courses.filter(course => course.level === level);
  }
}
