import React from 'react';
import ReactNative, {Text, TextInput, TouchableHighlight} from 'react-native';
import {shallow} from 'enzyme';
import NewMessageForm from './index.js';

describe('<NewMessageForm />', () => {
  it('should render NewMessageForm', () => {
    const component = shallow(<NewMessageForm />);
    expect(component).toBeDefined;
  });
});


