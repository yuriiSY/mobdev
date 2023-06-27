import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IeNewsPage } from './ie-news.page';

describe('IeNewsPage', () => {
  let component: IeNewsPage;
  let fixture: ComponentFixture<IeNewsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IeNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
