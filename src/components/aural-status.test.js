import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('Renders without crashing', () =>{
        shallow(<AuralStatus />)
    });
});