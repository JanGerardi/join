import { Routes } from '@angular/router';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { BoardComponent } from './board/board.component';
import { AddTaskPageComponent } from './add-task-page/add-task-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: '', component: BoardComponent },
    { path: 'board', component: BoardComponent },
    { path: 'contacts', component: ContactpageComponent },
    { path: 'add-task', component: AddTaskPageComponent },
    { path: 'help', component: HelpPageComponent}
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'legal-notice', component: LegalNoticeComponent }
];
