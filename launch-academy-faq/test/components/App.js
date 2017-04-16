/* jshint esversion: 6 */
import App from 'components/App';
import QuestionList from 'components/QuestionList';
import Question from 'components/Question';

describe( 'App', function() {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App data="" />);
  });

  it('should have a title', () => {
    expect(wrapper.find('title')).toBePresent();
  });
  it('should have the correct title', () => {
    expect(wrapper.find("We\'re here to help")).toBePresent();
  });
});
