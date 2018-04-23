import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () =>{
        shallow(<Feedback />)
    });
});