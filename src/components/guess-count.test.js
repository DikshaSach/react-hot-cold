import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () =>{
        shallow(<GuessCount />)
    });
});