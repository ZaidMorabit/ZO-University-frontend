import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Course } from "../models/course.model";
import { CourseService } from "./course.service";

@Injectable()
export class CoursesResolverService implements Resolve<Course[]>{
    constructor(private courseService: CourseService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const courses = this.courseService.getCourses();
        if (courses.length === 0) {
            return this.courseService.fetchCourses();
        } else {
            return courses;
        }

    }
}