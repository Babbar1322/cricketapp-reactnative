import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { AdMobBanner, AdMobRewarded } from 'expo-ads-admob';
import { SliderBox } from 'react-native-image-slider-box';

import styles from '../styles/styles';
import Trophy from '../../assets/image/Trophy.png';

const screenWidth = Math.round(Dimensions.get('window').width);

const initRewardAds = async () => {
	await AdMobRewarded.setAdUnitID("ca-app-pub-1918796407964963/8316206196");
	await AdMobRewarded.requestAdAsync();
	await AdMobRewarded.showAdAsync();
};

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [
				"https://i.ibb.co/828jb6q/CSk.jpg",
				"https://i.ibb.co/KrRLxWC/KXIP.jpg",
				"https://i.ibb.co/RjVQCvr/MI.jpg",
				"https://i.ibb.co/pLNF4Bb/RR.jpg",
			]
		}
	}
	componentDidMount() {
		setTimeout(() => {
			initRewardAds();
		}, 5000);
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#fff' }}>
				<View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, alignItems: 'center', justifyContent: 'center' }}>
					{/* <Image source={Logo} style={{width: 40, height: 40, borderRadius: 10}} /> */}
					<Text style={{ fontWeight: 'bold', fontSize: 18 }}>IPL 2022</Text>
				</View>
				<ScrollView>
					<View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 20, marginVertical: 20 }}>
						<SliderBox
							images={this.state.images}
							autoplay
							circleLoop
							parentWidth={screenWidth / 1.1} />
					</View>

					<View>
						<TouchableOpacity style={[styles.btn, { backgroundColor: '#ef8a12' }]} onPress={() => { this.props.navigation.navigate('Website', { url: 'https://www.webcyst.com/ipl/live_match/' }) }}>
							<View style={styles.btnInner}>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<MaterialIcons name='live-tv' size={30} color={'#fff'} />
									<Text style={{ color: '#fff', marginHorizontal: 10 }}>Live Match</Text>
								</View>
								<MaterialIcons name='arrow-forward-ios' size={25} color={'#fff'} />
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.btn, { backgroundColor: '#09eadc' }]} onPress={() => { this.props.navigation.navigate('Website', { url: 'https://www.webcyst.com/ipl/upcoming_match/' }) }}>
							<View style={styles.btnInner}>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<MaterialIcons name='skip-next' size={30} color={'#fff'} />
									<Text style={{ color: '#fff', marginHorizontal: 10 }}>Upcoming Match</Text>
								</View>
								<MaterialIcons name='arrow-forward-ios' size={25} color={'#fff'} />
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.btn, { backgroundColor: '#a482ed' }]} onPress={() => { this.props.navigation.navigate('Website', { url: 'https://webcyst.com/ipl/latest_updates/' }) }}>
							<View style={styles.btnInner}>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<MaterialIcons name='history' size={30} color={'#fff'} />
									<Text style={{ color: '#fff', marginHorizontal: 10 }}>Latest Updates</Text>
								</View>
								<MaterialIcons name='arrow-forward-ios' size={25} color={'#fff'} />
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.btn, { backgroundColor: 'tomato' }]} onPress={() => { this.props.navigation.navigate('More') }}>
							<View style={styles.btnInner}>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<MaterialIcons name='more-horiz' size={30} color={'#fff'} />
									<Text style={{ color: '#fff', marginHorizontal: 10 }}>More</Text>
								</View>
								<MaterialIcons name='arrow-forward-ios' size={25} color={'#fff'} />
							</View>
						</TouchableOpacity>
					</View>
					<View style={{ alignItems: 'center', marginVertical: 20 }}>
						<Image source={Trophy} style={{ width: screenWidth / 1.1, height: 200, resizeMode: 'contain', borderRadius: 10 }} />
					</View>
				</ScrollView>
				<View style={{ marginVertical: 10, height: 1 }}>
					<AdMobBanner
						bannerSize="fullBanner"
						adUnitID="ca-app-pub-1918796407964963/5229989808"
						servePersonalizedAds />
				</View>
				<StatusBar translucent={false} barStyle={'default'}/>
			</View>
		);
	};
};