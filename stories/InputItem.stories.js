import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import  InputItem from '../src/components/InputItem';

storiesOf('InputItem', module)
    .addDecorator(withInfo)
    .add('default', () => 
        <InputItem
            value='s'
        />
);


