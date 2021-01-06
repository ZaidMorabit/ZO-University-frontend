import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { CourseService } from './services/course.service';
import { UserListComponent } from './users/user-list/user-list.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  //{path:'', redirectTo:'/courses', pathMatch: 'full'},
  {path: "courses", redirectTo: "courses/1"},
  {path:"courses", component:CoursesComponent, children:[
    {path:":id", component:CourseListComponent}
  ]},
  {path:"users",component:UsersComponent, children:[
    {path:":userType", component:UserListComponent}
  ]},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
