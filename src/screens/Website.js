import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import {WebView} from 'react-native-webview';
import { AdMobBanner, AdMobRewarded } from 'expo-ads-admob';
import { MaterialIcons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

export default class Website extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            progress: '',
			loaded: false,
        }
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, alignItems: 'center'}}>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => {this.props.navigation.goBack()}}>
                    <MaterialIcons name='arrow-back-ios' size={30} color='#000' />
                    <Text style={{fontSize: 18}}>Go Back</Text>
                    </TouchableOpacity>
                </View>
                {!this.state.loaded ?
					<Progress.Bar
						borderRadius={0}
						borderWidth={0}
						color={'#ec7b15'}
						progress={this.state.progress}
						width={null} />
					: null}
                <WebView source={{uri: this.props.route.params.url}}
                onLoadProgress={({ nativeEvent }) => this.setState({ progress: nativeEvent.progress })}
                onLoadEnd={() => this.setState({ loaded: true })}
                onLoadStart={() => this.setState({ loaded: false })} />
            </View>
        );
    };
};