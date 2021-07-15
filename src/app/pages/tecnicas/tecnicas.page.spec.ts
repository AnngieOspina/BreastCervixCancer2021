import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TecnicasPage } from './tecnicas.page';

describe('TecnicasPage', () => {
  let component: TecnicasPage;
  let fixture: ComponentFixture<TecnicasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TecnicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
