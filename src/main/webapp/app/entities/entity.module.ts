import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'post',
        loadChildren: () => import('./post/post.module').then(m => m.GymbrainPostModule)
      },
      {
        path: 'tag',
        loadChildren: () => import('./tag/tag.module').then(m => m.GymbrainTagModule)
      },
      {
        path: 'comment',
        loadChildren: () => import('./comment/comment.module').then(m => m.GymbrainCommentModule)
      },
      {
        path: 'like',
        loadChildren: () => import('./like/like.module').then(m => m.GymbrainLikeModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class GymbrainEntityModule {}
