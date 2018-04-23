import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () =>{
        shallow(<GuessForm />)
    });
});