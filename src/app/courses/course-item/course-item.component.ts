import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  
  id: number;
  course: Course;
  isInModification = false;
  isInAddAnnouncement = false;
  isInAddFile = false;

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
      this.course = this.courseService.getCourseById(this.id);
    })
  }

  onModification(){
    this.isInModification = true;
  }

  onDiscardModification(){
    this.isInModification = false;
  }
  onSubmitModification(form: NgForm){
    console.log(form);
  }
  onSubmitAnnouncement(form: NgForm){
    console.log(form);
  }

  onAddAnnouncement(){
    this.isInAddAnnouncement = true;
  }

  onDiscardAnnouncement(){
    this.isInAddAnnouncement = false;
  }

  onAddFile(){
    this.isInAddFile = true;
  }
  onDiscardAddFile(){
    this.isInAddFile = false;
  }
  onSubmitAddFile(form: NgForm){
    console.log(form);
  }

}
