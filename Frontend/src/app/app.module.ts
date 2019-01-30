import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';


/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';

import { ResultComponent }    from './result/result.component';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';
//import {appRoutes }   from './routing';
//import { RouterModule } from '@angular/router';

/* Shared Service */
import { FormDataService }    from './data/formData.service';
import { WorkflowService }    from './workflow/workflow.service';
import { RegserviceService } from './servers/regservice.service';
import { HttpModule } from '@angular/http';
import { RegistraionComponent } from './registraion/registraion.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { NewpwComponent } from './resetpw/newpw/newpw.component';
import { RegisComponent } from './regis/regis.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FriendsComponent } from './friends/friends.component';
import { ChatComponent } from './chat/chat.component';
import { SearchComponent } from './search/search.component';
@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    AppRoutingModule,
                    HttpModule,
                    HttpClientModule
                    //RouterModule.forRoot(appRoutes),
                  ],
    providers:    [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      },AuthGuard,{ provide: FormDataService, useClass: FormDataService },
                   { provide: WorkflowService, useClass: WorkflowService },RegserviceService],
    declarations: [ AppComponent, NavbarComponent, PersonalComponent, WorkComponent, ResultComponent, RegistraionComponent, SignInComponent, UserProfileComponent, ResetpwComponent, NewpwComponent, RegisComponent, ProfileComponent, SettingComponent, NotificationsComponent, FriendsComponent, ChatComponent, SearchComponent],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}