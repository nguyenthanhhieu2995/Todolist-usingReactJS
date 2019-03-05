import React from 'react';
import { storiesOf } from '@storybook/react';

import  InputItem from '../src/components/InputItem';

storiesOf('InputItem', module)
    .add('default', () => 
        <InputItem
            value='s'
        />
    
);


