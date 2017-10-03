import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
  Image,
  TouchableHighlight
} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

export default class StopBuzzing extends Component{

  constructor(props) {
    super(props);
  }

  _onPressBell(){
    try {
      SoundPlayer.playSoundFile('bell', 'mp3');
    } catch (e) {
      console.warn('cannot play the sound file', e);
    }
  }

  render(){
    return(
           <View style={styles.container}>
           <Text style={styles.title}>
           Stop Buzzing
           </Text>
           <TouchableHighlight style={styles.bellCircle} onPress={this._onPressBell} underlayColor="#ffdd00">
           <Image 
           style={styles.bell}
           source={require('./res/bell-icon.png')}/>
           </TouchableHighlight>
           </View>
           );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D95141' ,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    fontWeight: 'bold'
  },
  bellCircle: {
    alignItems: 'center',
    justifyContent: 'center',

    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#D95141',
  },
  bell: {
    width: 120,
    height: 120,
  }
});