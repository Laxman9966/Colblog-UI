import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReadicheckboxesComponent } from './readicheckboxes/readicheckboxes.component';
import { ViewreportComponent } from './viewreport/viewreport.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SettingsComponent } from './settings/settings.component';
//import { GchartComponent } from './gchart/gchart.component';
import { AnalyticdashboardComponent } from './analyticdashboard/analyticdashboard.component';
//import { ProgessComponent } from './progess/progess.component';
//import { Progress2Component } from './progress2/progress2.component';
import { UserProgressComponent } from './user-progress/user-progress.component';
import { TestComponent } from './test/test.component';
import { from } from 'rxjs/observable/from';
import { ExceluploaderComponent } from './exceluploader/exceluploader.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
//import { UserdataComponent } from './userdata/userdata.component';

import { AddJobseekerComponent } from './add-jobseeker/add-jobseeker.component';
import { EditJobseekerComponent } from './edit-jobseeker/edit-jobseeker.component';
import { ListJobseekerComponent } from './list-jobseeker/list-jobseeker.component';

import { AddEmployerComponent } from './addemployer/addemployer.component';
import { ListEmployerComponent } from './list-employer/list-employer.component';
import { EditEmployerComponent } from './edit-employer/edit-employer.component';


// import { HomeComponent } from './home';
// import { LoginComponent } from './login';
// import { RegisterComponent } from './register';
// import { AuthGuard } from './guards';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: LoginComponent },
     { path: 'login', component: LoginComponent },
     { path: 'radio', component: ReadicheckboxesComponent },
     { path: 'view-report', component: ViewreportComponent },
      { path: 'changepassword', component: ChangepasswordComponent },
     { path: 'settings', component: SettingsComponent },
      { path: 'user-progress', component: UserProgressComponent },
      { path: 'anlytics-dashboard', component: AnalyticdashboardComponent },
      { path: 'test', component: TestComponent },
      { path: 'excelupload', component: ExceluploaderComponent },
      { path: 'manageuser', component: ManageuserComponent },

      { path: 'add-jobseeker', component: AddJobseekerComponent },
      { path: 'edit-jobseeker', component: EditJobseekerComponent },
      { path: 'list-jobseeker', component: ListJobseekerComponent },

      { path: 'add-employer', component: AddEmployerComponent },
      { path: 'edit-employer', component: EditEmployerComponent },
      { path: 'list-employer', component: ListEmployerComponent },


      
 //       { path: 'userdata', component: UserdataComponent },

//    { path: 'register', component: RegisterComponent },
//    { path: 'dashboard', component: DashboardComponent },
//    { path: 'details', component: DetailsComponent },

    // otherwise redirect to home
//    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
