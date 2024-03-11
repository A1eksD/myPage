import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: '', component: BodyComponent },
    { path: 'legalNotice', component: LegalNoticeComponent },
];
