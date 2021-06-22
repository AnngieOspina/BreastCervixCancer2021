import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BreastmamaPage } from './breastmama.page';

describe('BreastmamaPage', () => {
  let component: BreastmamaPage;
  let fixture: ComponentFixture<BreastmamaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreastmamaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BreastmamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
