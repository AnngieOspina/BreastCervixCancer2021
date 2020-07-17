import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EisPage } from './eis.page';

describe('EisPage', () => {
  let component: EisPage;
  let fixture: ComponentFixture<EisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
