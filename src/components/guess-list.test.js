import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () =>{
        shallow(<GuessList guesses={[]} />)
    });
});