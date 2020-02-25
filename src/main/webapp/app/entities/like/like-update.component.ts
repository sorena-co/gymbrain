import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';
import { ILike, Like } from 'app/shared/model/like.model';
import { LikeService } from './like.service';
import { IPost } from 'app/shared/model/post.model';
import { PostService } from 'app/entities/post/post.service';

@Component({
  selector: 'jhi-like-update',
  templateUrl: './like-update.component.html'
})
export class LikeUpdateComponent implements OnInit {
  isSaving: boolean;

  posts: IPost[];

  editForm = this.fb.group({
    id: [],
    username: [null, [Validators.required]],
    postId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected likeService: LikeService,
    protected postService: PostService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ like }) => {
      this.updateForm(like);
    });
    this.postService
      .query()
      .subscribe((res: HttpResponse<IPost[]>) => (this.posts = res.body), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(like: ILike) {
    this.editForm.patchValue({
      id: like.id,
      username: like.username,
      postId: like.postId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const like = this.createFromForm();
    if (like.id !== undefined) {
      this.subscribeToSaveResponse(this.likeService.update(like));
    } else {
      this.subscribeToSaveResponse(this.likeService.create(like));
    }
  }

  private createFromForm(): ILike {
    return {
      ...new Like(),
      id: this.editForm.get(['id']).value,
      username: this.editForm.get(['username']).value,
      postId: this.editForm.get(['postId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ILike>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackPostById(index: number, item: IPost) {
    return item.id;
  }
}
