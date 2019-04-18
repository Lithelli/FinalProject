import React, { Component } from 'react'
import { View, SafeAreaView, Image, StyleSheet, ImageBackground } from 'react-native'
import { Button, Text, ListItem } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import Sky from '../assets/pics/sky.jpg'

export default class Profile extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Profile",
            headerStyle: { backgroundColor: '#CFDBD5' },
            headerTitleStyle: { fontSize: 25 },
            headerRight: 
            <Icon
            name="diamond-stone"
            color="blue"
            size ={45}
            style = {{paddingRight: 10}}
            />
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isVisible: false
        };
    }

    getItems = async () => {
        try {
            let response = await fetch(`https://bham-gems-api.herokuapp.com/reviews/reviewer/asdfasdf`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let res = await response.json();
            if (!res) {
                console.log('Nope');
            } else {
                console.log(res);
                this.setState({
                    items: res,
                })
            }
        } catch (error) {
            console.log('Something went wrong');
        }
    }

    componentDidMount(){
        this.getItems()
    }

    handleClick = () => {
        return (

        )
    }

  render() {
    return (
        <SafeAreaView>
            <ImageBackground
            source={Sky}
            style={styles.UserInfo}>
                <View style={styles.Image}>
                    <Image
                    style = {{width: 100, height: 100}}
                    borderRadius= {50}
                    source={{uri: "https://411mania.com/wp-content/uploads/2018/04/John-Cena-Raw-4218-645x370.jpg"}}/>
                </View>
                <View style={styles.Name}>
                    <Text style={{fontSize: 35}}>John Cena</Text>
                    <Text style={{fontSize: 16}}>Johnnie@gmail.com</Text>
                </View>
            </ImageBackground>
            <View style={styles.UserContent}>
            <View style={styles.FoodTruck}>
                    <Button
                    title = "Add Food Truck"
                    raised = {true}
                    />
                </View>
                <View>
                    <Text h3 style={{paddingBottom: 20, alignSelf: 'center'}}>My Reviews</Text>
                    {/* mapping through reviews */}
                    {
                        this.state.items.map((l, i) => (
                            <ListItem
                                key={i}
                                title={l.title}
                                rightTitle={l.gems}
                                rightSubtitle={l.businessid}
                                titleStyle={{
                                    fontSize: 25,
                                    paddingBottom: 6,
                                    color: 'black',
                                }}
                                subtitle={l.reviewBody}
                                bottomDivider
                            />
                        ))
                    }
                </View>
            </View>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    UserInfo:{
      flexDirection:"column",
      borderBottomWidth: 1,
      marginBottom: 20,
      paddingRight: 3,
      paddingLeft: 3,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: "#BDBBB6"
    },
    Name:{
        // flex:1,
        alignItems: "center",
        // paddingRight: 15,
        marginBottom: 4,
        justifyContent: "center"
    },
    Image:{
        // flex:1,
        alignItems: "center",
        // paddingRight: 10,
        justifyContent: "center"
    },
    UserContent:{
        flexDirection:"column",
        height: "75%"
    },
    FoodTruck:{
        // flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 40,
    }
})