import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab2CommentPage } from './tab2-comment.page';

describe('Tab2CommentPage', () => {
  let component: Tab2CommentPage;
  let fixture: ComponentFixture<Tab2CommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2CommentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2CommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
