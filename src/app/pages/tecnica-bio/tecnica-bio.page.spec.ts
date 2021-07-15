import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TecnicaBioPage } from './tecnica-bio.page';

describe('TecnicaBioPage', () => {
  let component: TecnicaBioPage;
  let fixture: ComponentFixture<TecnicaBioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicaBioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TecnicaBioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
