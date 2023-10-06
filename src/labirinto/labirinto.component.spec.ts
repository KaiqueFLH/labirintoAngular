import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabirintoComponent } from './labirinto.component';

describe('LabirintoComponent', () => {
  let component: LabirintoComponent;
  let fixture: ComponentFixture<LabirintoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabirintoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabirintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
