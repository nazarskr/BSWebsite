import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule,
         MatFormFieldModule,
         MatInputModule,
         MatCardModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { WorksComponent } from './pages/works/works.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AdminWorksComponent } from './admin/admin-works/admin-works.component';
import { AdminProjectsComponent } from './admin/admin-projects/admin-projects.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { environment } from 'src/environments/environment';
import { OrderModule } from 'ngx-order-pipe';
// youtube
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { TransparentComponent } from './components/transparent/transparent.component';
import { TitleOpacityComponent } from './components/title-opacity/title-opacity.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { ChapterizeWorksPipe } from './shared/pipes/chapterize-works.pipe';
import { SelectedWorksPipe } from './shared/pipes/selected-works.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    NewsComponent,
    WorksComponent,
    ProjectsComponent,
    ContactComponent,
    AdminComponent,
    AdminWorksComponent,
    AdminProjectsComponent,
    LoginComponent,
    AdminContactComponent,
    AdminAboutComponent,
    TransparentComponent,
    TitleOpacityComponent,
    UploadImageComponent,
    ChapterizeWorksPipe,
    SelectedWorksPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    OrderModule,
    NgxDropzoneModule,
    HttpClientModule,
    EmbedVideo.forRoot()
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
