import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UaNewsPage } from './ua-news.page';

describe('UaNewsPage', () => {
  let component: UaNewsPage;
  let fixture: ComponentFixture<UaNewsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UaNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
