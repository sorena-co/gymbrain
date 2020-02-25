import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Like } from 'app/shared/model/like.model';
import { LikeService } from './like.service';
import { LikeComponent } from './like.component';
import { LikeDetailComponent } from './like-detail.component';
import { LikeUpdateComponent } from './like-update.component';
import { ILike } from 'app/shared/model/like.model';

@Injectable({ providedIn: 'root' })
export class LikeResolve implements Resolve<ILike> {
  constructor(private service: LikeService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ILike> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(map((like: HttpResponse<Like>) => like.body));
    }
    return of(new Like());
  }
}

export const likeRoute: Routes = [
  {
    path: '',
    component: LikeComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'gymbrainApp.like.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: LikeDetailComponent,
    resolve: {
      like: LikeResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'gymbrainApp.like.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: LikeUpdateComponent,
    resolve: {
      like: LikeResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'gymbrainApp.like.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: LikeUpdateComponent,
    resolve: {
      like: LikeResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'gymbrainApp.like.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
