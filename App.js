import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  icons,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={Styles.container}>
        <ImageBackground
          style={{flex: 1}}
          blurRadius={10}
          source={{
            uri:
              'https://www.cinematyrant.com/wp-content/uploads/2016/10/Vikings-on-netflix.jpg',
          }}>
          <View style={{paddingTop: 10}}>
            <TouchableOpacity>
              <MaterialIcon
                name="arrow-back"
                size={30}
                color="white"></MaterialIcon>
            </TouchableOpacity>
          </View>
          <View style={Styles.mainImage}>
            <Image
              source={{
                uri:
                  'https://www.cinematyrant.com/wp-content/uploads/2016/10/Vikings-on-netflix.jpg',
              }}
              style={{
                width: 200,
                height: 300,
              }}
            />
          </View>

          <View style={Styles.details}>
            <Text style={Styles.match}>98%Match</Text>
            <Text style={Styles.year}>2019</Text>
            <Text style={Styles.age}>18+</Text>
            <Text style={Styles.season}>6 Seasons</Text>
            <Text style={Styles.hd}>hd</Text>
          </View>
          <View style={Styles.trendingview}>
            <MaterialIcon name="trending-up" color="white"></MaterialIcon>
            <Text style={Styles.trending}>#8 in India Today</Text>
          </View>
          <View style={Styles.playDownloadView}>
            <TouchableOpacity style={Styles.playButton}>
              <Text style={{fontWeight: 'bold'}}>
                <MaterialIcon name="play-arrow" size={12} />
                Play
              </Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.playDownloadView}>
            <TouchableOpacity style={Styles.downloadButton}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>
                <MaterialIcon name="arrow-downward" size={12} />
                Download S1:E1
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={Styles.descriptionNormal}>
              Ragnar Lothbrok, a legendary Norse hero, is a mere farmer who
              rises up to become a fearless warrior and commander of the Viking
              tribes with the support of his equally ferocious family.
            </Text>
            <Text style={Styles.descriptionBold}>
              Starring:
              <Text style={Styles.descriptionNormal}>
                Travis Fimmel Katheryn Winnick Clive Standen Jessalyn Gilsig
                Gustaf Skarsgård Gabriel Byrne George Blagden Donal Logue Alyssa
                Sutherland Linus Roache Alexander Ludwig Ben Robson Kevin Durand
                Lothaire Bluteau John Kavanagh Peter Franzén Jasper Pääkkönen
                Alex Høgh Andersen Marco Ilsø David Lindström Jordan Patrick
                Smith Moe Dunford Jonathan Rhys Meyers Danila Kozlovsky Eric
                Johnson Georgia Hirst Ragga Ragnars Ray Stevenson
              </Text>
            </Text>
            <Text style={Styles.descriptionBold}>
              Creator:
              <Text style={Styles.descriptionNormal}>Michael Hirst</Text>
            </Text>
          </View>
          <View style={Styles.optionsView}>
            <View style={{marginLeft: 40}}>
              <TouchableOpacity>
                <MaterialIcon name="add" color="white" size={30}></MaterialIcon>
              </TouchableOpacity>
            </View>
            <View style={{marginLeft: 40}}>
              <TouchableOpacity>
                <MaterialIcon
                  name="thumb-up"
                  color="white"
                  size={30}></MaterialIcon>
              </TouchableOpacity>
            </View>
            <View style={{marginLeft: 40}}>
              <TouchableOpacity>
                <MaterialIcon
                  name="share"
                  color="white"
                  size={30}></MaterialIcon>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.optionsNameView}>
            <Text style={Styles.optionsName}>My List</Text>
            <Text style={Styles.optionsName}>Rate</Text>
            <Text style={Styles.optionsName}>Share</Text>
          </View>
          <View style={Styles.bottomIcons}>
            <TouchableOpacity>
              <MaterialIcon name="home" color="white" size={25}></MaterialIcon>
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcon
                name="search"
                color="white"
                size={25}></MaterialIcon>
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcon
                name="play-arrow"
                color="white"
                size={25}></MaterialIcon>
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcon
                name="arrow-downward"
                color="white"
                size={25}></MaterialIcon>
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcon name="more" color="white" size={25}></MaterialIcon>
            </TouchableOpacity>
          </View>
          <View style={Styles.bottomIconsNameView}>
            <Text style={Styles.homeIcon}>Home</Text>
            <Text style={Styles.searchIcon}>Search</Text>

            <Text style={Styles.comingSoonIcon}>Coming Soon</Text>
            <Text style={Styles.downloadsIcon}>Downloads</Text>
            <Text style={Styles.moreIcon}>More</Text>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainImage: {
    alignItems: 'center',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  match: {
    margin: 8,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 14,
  },
  year: {
    margin: 10,
    color: 'white',
    fontSize: 14,
  },
  age: {
    margin: 10,
    color: 'white',
    backgroundColor: 'grey',
  },
  season: {
    margin: 10,
    color: 'white',
  },
  hd: {
    margin: 10,
    backgroundColor: 'white',
  },
  trendingview: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  trending: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  playDownloadView: {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  playButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 8,
    borderRadius: 5,
  },
  downloadButton: {
    backgroundColor: '#3e3f40',
    alignItems: 'center',
    padding: 8,
    borderRadius: 5,
  },
  descriptionNormal: {
    margin: 10,
    color: 'white',
    fontWeight: 'normal',
  },
  descriptionBold: {
    margin: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  optionsView: {
    marginTop: 10,
    flexDirection: 'row',
  },
  optionsName: {
    marginLeft: 40,
    fontSize: 10,
    color: 'white',
  },
  optionsNameView: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#202121',
  },
  homeIcon: {
    marginLeft: 25,
    fontSize: 10,
    color: 'white',
  },
  searchIcon: {
    marginLeft: 40,
    fontSize: 10,
    color: 'white',
  },
  comingSoonIcon: {
    marginLeft: 30,
    fontSize: 10,
    color: 'white',
  },
  downloadsIcon: {
    marginLeft: 20,
    fontSize: 10,
    color: 'white',
  },
  moreIcon: {
    marginLeft: 30,
    fontSize: 10,
    color: 'white',
  },
  bottomIconsNameView: {
    flexDirection: 'row',
    height: 25,
    backgroundColor: '#202121',
  },
});
