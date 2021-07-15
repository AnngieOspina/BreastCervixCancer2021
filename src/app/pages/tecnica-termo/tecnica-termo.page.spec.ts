import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TecnicaTermoPage } from './tecnica-termo.page';

describe('TecnicaTermoPage', () => {
  let component: TecnicaTermoPage;
  let fixture: ComponentFixture<TecnicaTermoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicaTermoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TecnicaTermoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
