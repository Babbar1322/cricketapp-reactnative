import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import styles from '../styles/styles';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const iconClr = '#fcc729';

const screenWidth = Math.round(Dimensions.get('window').width);

export default class More extends Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, alignItems: 'center', justifyContent: 'center' }}>
					{/* <Image source={Logo} style={{width: 40, height: 40, borderRadius: 10}} /> */}
					<Text style={{ fontWeight: 'bold', fontSize: 18 }}>IPL 2022</Text>
				</View>
				<ScrollView>
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
					<TouchableOpacity style={styles.squareBtn} onPress={() => { this.props.navigation.navigate('Website', { url: 'https://www.webcyst.com/ipl/live_match/' }) }}>
						<View style={{ alignItems: 'center' }}>
							<MaterialIcons name='live-tv' size={70} color={iconClr} />
							<Text style={styles.fonts}>Live Match</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.squareBtn}
					onPress={() => { this.props.navigation.navigate('Website',
					{ url: 'https://www.google.com/search?q=ipl&rlz=1C1ONGR_enIN997IN997&oq=ipl&aqs=chrome.0.0i131i355i433i512j46i131i433i512j0i131i433i512l2j0i433i512j0i131i433i512j0i512j0i131i433j0i457i512j0i131i433i512.866j0j15&sourceid=chrome&ie=UTF-8#sie=lg;/g/11p5qpzt6t;5;/m/03b_lm1;mt;fp;1;;' }) }}>
						<View style={{ alignItems: 'center' }}>
							<MaterialIcons name='schedule' size={70} color={iconClr} />
							<Text style={styles.fonts}>Schedule</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.squareBtn}
					onPress={() => { this.props.navigation.navigate('Website',
					{ url: 'https://www.iplt20.com/venues' }) }}>
						<View style={{ alignItems: 'center' }}>
							<MaterialCommunityIcons name='stadium-variant' size={70} color={iconClr} />
							<Text style={styles.fonts}>Venue</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.squareBtn}
					onPress={() => { this.props.navigation.navigate('Website',
					{ url: 'https://www.google.com/search?q=ipl&rlz=1C1ONGR_enIN997IN997&oq=ipl&aqs=chrome.0.0i131i355i433i512j46i131i433i512j0i131i433i512l2j0i433i512j0i131i433i512j0i512j0i131i433j0i457i512j0i131i433i512.866j0j15&sourceid=chrome&ie=UTF-8#sie=lg;/g/11p5qpzt6t;5;/m/03b_lm1;st;fp;1;;' }) }}>
						<View style={{ alignItems: 'center' }}>
							<FontAwesome name='users' size={70} color={iconClr} />
							<Text style={styles.fonts}>Teams</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.squareBtn}
					onPress={() => { this.props.navigation.navigate('Website',
					{ url: 'https://www.google.com/search?q=ipl&rlz=1C1ONGR_enIN997IN997&oq=ipl&aqs=chrome.0.0i131i355i433i512j46i131i433i512j0i131i433i512l2j0i433i512j0i131i433i512j0i512j0i131i433j0i457i512j0i131i433i512.866j0j15&sourceid=chrome&ie=UTF-8#sie=lg;/g/11p5qpzt6t;5;/m/03b_lm1;pl;fp;1;;' }) }}>
						<View style={{ alignItems: 'center' }}>
							<MaterialCommunityIcons name='cricket' size={70} color={iconClr} />
							<Text style={styles.fonts}>Players</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.squareBtn}
					onPress={() => { this.props.navigation.navigate('Website',
					{ url: 'https://www.webcyst.com/ipl/live_match/' }) }}>
						<View style={{ alignItems: 'center' }}>
							<MaterialCommunityIcons name='scoreboard' size={70} color={iconClr} />
							<Text style={styles.fonts}>Score</Text>
						</View>
					</TouchableOpacity>
				</View>
				</ScrollView>
			</View>
		);
	};
};