import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPartsRequestComponent } from './upload-parts-request.component';

describe('UploadPartsRequestComponent', () => {
  let component: UploadPartsRequestComponent;
  let fixture: ComponentFixture<UploadPartsRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPartsRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPartsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
