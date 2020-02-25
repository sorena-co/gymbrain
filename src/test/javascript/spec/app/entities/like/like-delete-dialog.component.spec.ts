import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { GymbrainTestModule } from '../../../test.module';
import { LikeDeleteDialogComponent } from 'app/entities/like/like-delete-dialog.component';
import { LikeService } from 'app/entities/like/like.service';

describe('Component Tests', () => {
  describe('Like Management Delete Component', () => {
    let comp: LikeDeleteDialogComponent;
    let fixture: ComponentFixture<LikeDeleteDialogComponent>;
    let service: LikeService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GymbrainTestModule],
        declarations: [LikeDeleteDialogComponent]
      })
        .overrideTemplate(LikeDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(LikeDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(LikeService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
