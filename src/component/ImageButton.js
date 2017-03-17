/**
 * Created by eengoo on 17/3/17.
 */
import React, {PropTypes} from 'react';
import {
    Image,
    View,
    TouchableOpacity,
} from 'react-native';

const propTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    source: PropTypes.any,
    style: Image.propTypes.style,
    containerStyle: View.propTypes.style,
};

const ImageButton = ({onPress, disabled, source, style, containerStyle})=>(
    <TouchableOpacity
        disabled={disabled}
        style={containerStyle}
        onPress={onPress}
    >
        <Image
            style={style}
            source={source}
        />

    </TouchableOpacity>
);

ImageButton.propTypes = propTypes;

ImageButton.defaultProps={
    onPress() {},
    disabled:false,
};

export default ImageButton;