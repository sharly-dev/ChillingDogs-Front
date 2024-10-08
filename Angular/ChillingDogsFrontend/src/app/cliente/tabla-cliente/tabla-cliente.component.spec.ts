import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaClienteComponent } from './tabla-cliente.component';

describe('TablaClienteComponent', () => {
  let component: TablaClienteComponent;
  let fixture: ComponentFixture<TablaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
