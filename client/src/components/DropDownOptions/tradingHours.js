import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const openingHours = (number, suffix = 'am') =>
    _.times(number, (index) => ({
        key: index,
        text: `${index}${suffix}`,
        value: index,
    }));

const closingHours = (number, suffix = 'pm') =>
    _.times(number, (index) => ({
        key: index,
        text: `${index}${suffix}`,
        value: index,
    }));

const TradingHours = () => (
    <>
        <Dropdown placeholder='Opening ' scrolling options={openingHours(23)} />

        <Dropdown placeholder='Closing ' scrolling options={closingHours(23)} />
    </>
);


export default TradingHours