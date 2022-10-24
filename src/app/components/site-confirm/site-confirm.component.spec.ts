import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteConfirmComponent } from './site-confirm.component';

describe('SiteConfirmComponent', () => {
  let component: SiteConfirmComponent;
  let fixture: ComponentFixture<SiteConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
