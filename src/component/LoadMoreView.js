/**
 * Created by eengoo on 17/3/16.
 */
import React, {} from 'react';
import {
    ActivityIndicator,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import * as colors from '../constants/ColorTypes';

const LoadingMoreView = ()=> (
    <View style={styles.loading}>
        <ActivityIndicator
            size="large"
            color={colors.REFRESH_COLOR}
        />
        <Text style={styles.loadingText}>数据加载中...</Text>
    </View>
);

const styles = StyleSheet.create({
    loading:{
        alignItems:'center',
        justifyContent:'center',
    },
    loadingText:{
        marginTop:10,
        textAlign:'center',
    },
});

export default LoadingMoreView;