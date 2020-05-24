import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DropdownModule } from 'angular-custom-dropdown';

import { GoogleChartsModule } from 'angular-google-charts';
//import { GoogleChartsModule } from '../angular-google-charts/src/public_api';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


//import {ToastrModule} from 'ngx-toastr';


import { routing }        from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { DataService } from './services/DataService';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonheaderComponent } from './commonheader/commonheader.component';
import { ReadicheckboxesComponent } from './readicheckboxes/readicheckboxes.component';
import { ViewreportComponent } from './viewreport/viewreport.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SettingsComponent } from './settings/settings.component';
//import { GchartComponent } from './gchart/gchart.component';
import { AnalyticdashboardComponent } from './analyticdashboard/analyticdashboard.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { ChatComponent } from './chat/chat.component';
import { TestComponent } from './test/test.component';
import { UserProgressComponent } from './user-progress/user-progress.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ExceluploaderComponent } from './exceluploader/exceluploader.component';
import { ManageuserComponent } from './manageuser/manageuser.component';

import { AddJobseekerComponent } from './add-jobseeker/add-jobseeker.component';
import { EditJobseekerComponent } from './edit-jobseeker/edit-jobseeker.component';
import { ListJobseekerComponent } from './list-jobseeker/list-jobseeker.component';

import {UserService} from './services/userservice';
import {JobseekerService} from './services/jobseekerservice';
import {ApiServices} from './services/apiservices';
import {EmployerService} from './services/employerservice';


import { AddEmployerComponent } from './addemployer/addemployer.component';
import { ListEmployerComponent } from './list-employer/list-employer.component';
import { EditEmployerComponent } from './edit-employer/edit-employer.component';



@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CommonheaderComponent,
    ReadicheckboxesComponent,
    ViewreportComponent,
    ChangepasswordComponent,
    SettingsComponent,
  //  GchartComponent,
    AnalyticdashboardComponent,
    ChatComponent,
    TestComponent,
    UserProgressComponent,
    ExceluploaderComponent,
    ManageuserComponent,
    AddJobseekerComponent,
    EditJobseekerComponent,
    ListJobseekerComponent,
    AddEmployerComponent,
    ListEmployerComponent,
    EditEmployerComponent,
  ],
  imports: [
  routing,
    BrowserModule,
    FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        DropdownModule,
        //GoogleChartsModule,
         GoogleChartsModule.forRoot('AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'),
         SlimLoadingBarModule,
          NgxPaginationModule,
        //  ToastrModule.forRoot(),
      //  NgbModule,
  ],
  providers: [ApiServices,DataService,UserService,JobseekerService,EmployerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
