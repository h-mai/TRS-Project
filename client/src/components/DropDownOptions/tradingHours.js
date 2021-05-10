import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'


// const moment = require('moment');
// const OpeningTimes = require('moment-opening-times');
// const now = moment();
// const openingTimesMoment = new OpeningTimes;
// const status = openingTimesMoment.getStatus(now);

// const openingTimes =
// {
//   sunday:    [ { opens: '', closes: '' } ],
//   monday:    [ { opens: '', closes: '' } ], 
//   tuesday:   [ { opens: '', closes: '' } ],
//   wednesday: [ { opens: '', closes: '' } ],
//   thursday:  [ { opens: '', closes: '' } ],
//   friday:    [ { opens: '', closes: '' } ],
//   saturday:  [ { opens: '', closes: '' } ],
// }

// //

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