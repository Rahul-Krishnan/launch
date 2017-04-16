/* jshint esversion: 6 */
import Question from 'components/Question';

describe('Question', function() {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Question
        question= "What does the fox say?"
        answer= "Ringading ding ding ding!"
      />
    );
  });

  it('should have the correct question', () => {
    expect(wrapper.find('question')).toBe("What does the fox say?");
  });

  it('should have the correct answer', () => {
    expect(wrapper.find('answer')).toBe("Ringading ding ding ding");
  });
});
