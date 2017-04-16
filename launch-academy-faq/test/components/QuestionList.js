/* jshint esversion: 6 */
import App from 'components/App';
import QuestionList from 'components/QuestionList';
import Question from 'components/Question';

describe( 'QuestionList', function() {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<QuestionList data="" />);
  });

  xit('should have a title', () => {
    expect(wrapper.find('title')).toBePresent();
  });
  xit('should have the correct title', () => {
    expect(wrapper.find("We\'re here to help")).toBePresent();
  });
});
