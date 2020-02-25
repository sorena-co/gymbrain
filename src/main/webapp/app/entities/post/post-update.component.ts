import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';
import { IPost, Post } from 'app/shared/model/post.model';
import { PostService } from './post.service';
import { ITag } from 'app/shared/model/tag.model';
import { TagService } from 'app/entities/tag/tag.service';

@Component({
  selector: 'jhi-post-update',
  templateUrl: './post-update.component.html'
})
export class PostUpdateComponent implements OnInit {
  isSaving: boolean;

  tags: ITag[];

  editForm = this.fb.group({
    id: [],
    title: [null, [Validators.required]],
    summary: [null, [Validators.required]],
    postType: [null, [Validators.required]],
    active: [],
    activeDate: [],
    activeBy: [],
    tags: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected postService: PostService,
    protected tagService: TagService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ post }) => {
      this.updateForm(post);
    });
    this.tagService
      .query()
      .subscribe((res: HttpResponse<ITag[]>) => (this.tags = res.body), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(post: IPost) {
    this.editForm.patchValue({
      id: post.id,
      title: post.title,
      summary: post.summary,
      postType: post.postType,
      active: post.active,
      activeDate: post.activeDate != null ? post.activeDate.format(DATE_TIME_FORMAT) : null,
      activeBy: post.activeBy,
      tags: post.tags
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const post = this.createFromForm();
    if (post.id !== undefined) {
      this.subscribeToSaveResponse(this.postService.update(post));
    } else {
      this.subscribeToSaveResponse(this.postService.create(post));
    }
  }

  private createFromForm(): IPost {
    return {
      ...new Post(),
      id: this.editForm.get(['id']).value,
      title: this.editForm.get(['title']).value,
      summary: this.editForm.get(['summary']).value,
      postType: this.editForm.get(['postType']).value,
      active: this.editForm.get(['active']).value,
      activeDate:
        this.editForm.get(['activeDate']).value != null ? moment(this.editForm.get(['activeDate']).value, DATE_TIME_FORMAT) : undefined,
      activeBy: this.editForm.get(['activeBy']).value,
      tags: this.editForm.get(['tags']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPost>>) {
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

  trackTagById(index: number, item: ITag) {
    return item.id;
  }

  getSelected(selectedVals: any[], option: any) {
    if (selectedVals) {
      for (let i = 0; i < selectedVals.length; i++) {
        if (option.id === selectedVals[i].id) {
          return selectedVals[i];
        }
      }
    }
    return option;
  }
}
