import React from 'react';
import _ from 'lodash';
import {Sparklines,SparklinesLine,SparklinesSpots,SparklinesReferenceLine} from 'react-sparklines';
export default (props)=> {
    function average(data) {
        return _.round(_.sum(data)/data.length);
    }
    return (
        <div>
            <Sparklines height={30} width={100} data={props.data}>
                        <SparklinesLine color={props.color} />
                        <SparklinesReferenceLine type="avg" />
                        <SparklinesSpots />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
}