import React from 'react';
import { shallow, mount } from 'enzyme';

import Footer from './Footer';

describe('<Footer />', () => {
  it('should render contact info', () => {
				const renderedComponent = mount(<Footer />);
    expect(renderedComponent.text()).toContain('360-526-1582')
		});
		
  it('should render LinkedIn link', () => {
			const content = <a href="https://www.linkedin.com/in/barry-ross-a3b19520/" target="_blank"><i aria-hidden="true" class="linkedin icon"></i></a>;
				const renderedComponent = mount(<Footer />);
    expect(renderedComponent.contains(content))
		});
		
  it('should render GitHub link', () => {
			const content = <a href="https://www.github.com/barryross" target="_blank"><i aria-hidden="true" class="github icon"></i></a>;
				const renderedComponent = mount(<Footer />);
    expect(renderedComponent.contains(content))
  });

});
