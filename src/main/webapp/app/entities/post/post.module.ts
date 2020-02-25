import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GymbrainSharedModule } from 'app/shared/shared.module';
import { PostComponent } from './post.component';
import { PostDetailComponent } from './post-detail.component';
import { PostUpdateComponent } from './post-update.component';
import { PostDeleteDialogComponent } from './post-delete-dialog.component';
import { postRoute } from './post.route';

@NgModule({
  imports: [GymbrainSharedModule, RouterModule.forChild(postRoute)],
  declarations: [PostComponent, PostDetailComponent, PostUpdateComponent, PostDeleteDialogComponent],
  entryComponents: [PostDeleteDialogComponent]
})
export class GymbrainPostModule {}
