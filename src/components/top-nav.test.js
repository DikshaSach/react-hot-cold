import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () =>{
        shallow(<TopNav />)
    });
});