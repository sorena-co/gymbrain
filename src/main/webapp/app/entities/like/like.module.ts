import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GymbrainSharedModule } from 'app/shared/shared.module';
import { LikeComponent } from './like.component';
import { LikeDetailComponent } from './like-detail.component';
import { LikeUpdateComponent } from './like-update.component';
import { LikeDeleteDialogComponent } from './like-delete-dialog.component';
import { likeRoute } from './like.route';

@NgModule({
  imports: [GymbrainSharedModule, RouterModule.forChild(likeRoute)],
  declarations: [LikeComponent, LikeDetailComponent, LikeUpdateComponent, LikeDeleteDialogComponent],
  entryComponents: [LikeDeleteDialogComponent]
})
export class GymbrainLikeModule {}
