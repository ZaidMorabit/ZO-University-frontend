import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseAddComponent } from './courses/course-add/course-add.component';
import { CourseItemComponent } from './courses/course-item/course-item.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { CoursesResolverService } from './services/course-resolver.service';
import { UserListComponent } from './users/user-list/user-list.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  //{path:'', redirectTo:'/courses', pathMatch: 'full'},
  { path: "courses", redirectTo: "courses/level", pathMatch:'full' },
  {
    path: "courses", component: CoursesComponent, resolve:[CoursesResolverService], children: [
      { path: "level", component: CourseListComponent },
      { path: "level/:id", component: CourseListComponent },
      { path: "add", component: CourseAddComponent },
      { path: ":id", component: CourseItemComponent }
    ]
  },
  {
    path: "users", component: UsersComponent, children: [
      { path: ":userType", component: UserListComponent }
    ]
  },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[CoursesResolverService]
})
export class AppRoutingModule { }
