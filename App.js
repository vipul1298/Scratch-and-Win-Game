import React from 'react';
import { StyleSheet, Text, View,Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Button } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';


var itemArray = new Array(25).fill('empty');

export default class App extends React.Component {

constructor(props){
  super(props);
  this.state = {
    randomNumber: "",
    scratchCount: 0,
    hault: false
  }
}

//when app loads up
componentDidMount(){
  //call generate random number
  this.setState({randomNumber : this.generateRandomNumber()})
}

popUpMessage = () => {
  if(this.state.scratchCount >= 5){
    Alert.alert("Better luck next time");
  }
}

generateRandomNumber = () => {
let randomNumber = Math.floor(Math.random()*25);
this.setState({randomNumber:randomNumber,isScratched:true});
return randomNumber;
}

scratchitem = itemNumber => {
  //decide lucky or unlucky
  if(!this.state.hault && this.state.scratchCount<5){
    
    if(this.state.randomNumber === itemNumber){
      itemArray[itemNumber] = "lucky"
    }else{
      itemArray[itemNumber] = "unlucky"
    }
    this.setState({scratchCount:this.state.scratchCount+1});
  }
  this.setState({stop:true});
  this.popUpMessage();
  this.forceUpdate();
}

scratchItemIcon = itemNumber => {
  //find right icon 
  if(itemArray[itemNumber] === "lucky"){
    return "dollar"
  }else if(itemArray[itemNumber] === "unlucky"){
       return "frown-o"
  }
  return "circle"
}

scratchItemColor = itemNumber => {
  //find right color
  if(itemArray[itemNumber] === "lucky"){
    return "green"
  }else if(itemArray[itemNumber] === "unlucky"){
       return "red"
  }
  return "black"
}

showAllItem = () => {
  //Button-reveal all icons
  itemArray.fill('unlucky');
  itemArray[this.state.randomNumber]='lucky';

  this.forceUpdate();
}

resetGame = () => {
   this.setState({randomNumber : this.generateRandomNumber(),stop:false,scratchCount:0},() => {
     itemArray.fill('empty');
     this.forceUpdate();
   })
}


  render(){
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
        <Text style={styles.txt}>Scratch and Win Game</Text>
        </View>
        <View style ={styles.grid}>
          <View style ={styles.row}>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(0)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(0)}
                size={50}
                color ={this.scratchItemColor(0)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(1)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(1)}
                size={50}
                color ={this.scratchItemColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(2)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(2)}
                size={50}
                color ={this.scratchItemColor(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(3)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(3)}
                size={50}
                color ={this.scratchItemColor(3)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(4)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(4)}
                size={50}
                color ={this.scratchItemColor(4)}
              />
            </TouchableOpacity>
          </View>
          <View style ={styles.row}>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(5)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(5)}
                size={50}
                color ={this.scratchItemColor(5)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(6)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(6)}
                size={50}
                color ={this.scratchItemColor(6)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(7)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(7)}
                size={50}
                color ={this.scratchItemColor(7)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(8)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(8)}
                size={50}
                color ={this.scratchItemColor(8)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(9)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(9)}
                size={50}
                color ={this.scratchItemColor(9)}
              />
            </TouchableOpacity>
          </View>
          <View style ={styles.row}>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(10)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(10)}
                size={50}
                color ={this.scratchItemColor(10)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(11)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(11)}
                size={50}
                color ={this.scratchItemColor(11)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(12)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(12)}
                size={50}
                color ={this.scratchItemColor(12)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(13)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(13)}
                size={50}
                color ={this.scratchItemColor(13)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(14)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(14)}
                size={50}
                color ={this.scratchItemColor(14)}
              />
            </TouchableOpacity>
          </View>
          <View style ={styles.row}>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(15)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(15)}
                size={50}
                color ={this.scratchItemColor(15)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(16)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(16)}
                size={50}
                color ={this.scratchItemColor(16)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(17)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(17)}
                size={50}
                color ={this.scratchItemColor(17)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(18)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(18)}
                size={50}
                color ={this.scratchItemColor(18)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(19)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(19)}
                size={50}
                color ={this.scratchItemColor(19)}
              />
            </TouchableOpacity>
          </View>
          <View style ={styles.row}>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(20)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(20)}
                size={50}
                color ={this.scratchItemColor(20)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(21)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(21)}
                size={50}
                color ={this.scratchItemColor(21)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(22)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(22)}
                size={50}
                color ={this.scratchItemColor(22)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(23)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(23)}
                size={50}
                color ={this.scratchItemColor(23)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.scratchitem(24)
            }}
            >
              <FontAwesome
                name ={this.scratchItemIcon(24)}
                size={50}
                color ={this.scratchItemColor(24)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Button
        onPress={() => {
          this.showAllItem();
        }}
        full success style={styles.btn}>
          <Text style={styles.btnText}>Show All Coupons</Text>
        </Button>
        <Button
        onPress={() => {
          this.resetGame();
        }}
        full primary style={styles.btn}>
          <Text style={styles.btnText}>Reset Game</Text>
        </Button>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid :{

  },item : {
      alignItems: "center",
      padding:10,
      borderWidth:2,
      borderColor:"#000",
      minWidth:70
  },
  row : {
    flexDirection:"row"
  },
  btn : {
       margin:6,
       borderRadius:5,

  },
  btnText: {
     color:"#fff",
     fontSize:18
  },
  txt : {
    fontWeight: "bold",
    fontSize:20,
    color:"#fff",
    textAlign: "center"
  },
  topBar: {
    backgroundColor: "#8B78E6",
    height:50,
    marginVertical:20,
    justifyContent: "center",
    width:Dimensions.get("window").width

  }
});
