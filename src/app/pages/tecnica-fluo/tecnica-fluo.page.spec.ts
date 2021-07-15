import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TecnicaFluoPage } from './tecnica-fluo.page';

describe('TecnicaFluoPage', () => {
  let component: TecnicaFluoPage;
  let fixture: ComponentFixture<TecnicaFluoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicaFluoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TecnicaFluoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
