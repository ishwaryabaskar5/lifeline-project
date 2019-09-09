import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AccountComponent } from './header/account/account.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegistercardsComponent } from './mainpage/registercards/registercards.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { VideoComponent } from './mainpage/video/video.component';
import { CarouselComponent } from './mainpage/carousel/carousel.component';
import { AimsobjectivesComponent } from './aimsobjectives/aimsobjectives.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { DonationComponent } from './donation/donation.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MythsComponent } from './myths/myths.component';
import { DonorRegistrationFormComponent } from './donor-registration-form/donor-registration-form.component';
import { MatFormFieldModule, MatInputModule, MatRadioModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule,MatNativeDateModule,MatCheckboxModule } from '@angular/material';
import { RecepientregistrationformcomponentComponent } from './recepientregistrationformcomponent/recepientregistrationformcomponent.component';
import { ProfileComponent } from './donordashboard/profile.component';
import { MatListModule } from '@angular/material/list';
import { RecepientdashboardComponent } from './recepientdashboard/recepientdashboard.component';
import { ReportgenerationComponent } from './reportgeneration/reportgeneration.component';
import { DashboardreportsComponent } from './dashboardreports/dashboardreports.component';
import { LoginComponent } from './header/login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChatcomponentComponent } from './donordashboard/chatcomponent/chatcomponent.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ChatbuttonComponent } from './donordashboard/chatbutton/chatbutton.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

//  import { EmbedVideoService } from 'ngx-embed-video';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    AccountComponent,
    MainpageComponent,
    RegistercardsComponent,
    FooterComponent,
    VideoComponent,
    CarouselComponent,
    AimsobjectivesComponent,
    TermsandconditionsComponent,
    DonationComponent,
    MythsComponent,
    DonorRegistrationFormComponent,
    RecepientregistrationformcomponentComponent,
    ProfileComponent,
    RecepientdashboardComponent,
    ReportgenerationComponent,
    DashboardreportsComponent,
    LoginComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    SnackBarComponent,
    ChatcomponentComponent,
    ChatbuttonComponent,
   
    
  ],
  imports: [
    BrowserModule,
    EmbedVideo.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatMenuModule,
    HttpClientModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatToolbarModule,
    MatDialogModule
  ],
  entryComponents: [
    SnackBarComponent,
    ChatbuttonComponent,
    ChatcomponentComponent
  ],
  providers: [MatBottomSheet],
  bootstrap: [AppComponent]
})
export class AppModule { }