import { TopNavModule } from './top-nav.module';

describe('TopNavModule', () => {
  let topNavModule: TopNavModule;

  beforeEach(() => {
    topNavModule = new TopNavModule();
  });

  it('should create an instance', () => {
    expect(topNavModule).toBeTruthy();
  });
});
