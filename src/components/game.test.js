import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () =>{
        shallow(<Game />)
    });
});