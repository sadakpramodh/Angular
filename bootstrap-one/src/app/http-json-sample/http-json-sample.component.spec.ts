import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpJsonSampleComponent } from './http-json-sample.component';

describe('HttpJsonSampleComponent', () => {
  let component: HttpJsonSampleComponent;
  let fixture: ComponentFixture<HttpJsonSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpJsonSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpJsonSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
