/**
 * Created by eengoo on 17/3/17.
 */
import React,{PropTypes} from 'react';
import {View} from 'react-native';
var MK =  require('react-native-material-kit');
const {MKButton, MKColor} = MK;

const propTypes = {
    style: View.propTypes.style,
};

const FloatingButton = ({style})=> (
    MKButton.coloredFab()
        .withStyle(style)
        .build()
);

FloatingButton.propTypes = propTypes;

FloatingButton.defaultProps={
    style:{
        width:50,
        height:50,
        borderRadius:25,
    },
};

export default FloatingButton;

