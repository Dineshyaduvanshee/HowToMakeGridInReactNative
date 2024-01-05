import { StyleSheet, Text, View } from "react-native";

const App = () =>{
  const users = [
    {
      id:1,
      name:"Dinesh"
    },
    {
      id:2,
      name:"Dinesh kumar"
    },
    {
      id:3,
      name:"dineshyaduvanshee"
    },
    {
      id:4,
      name:"mahesh"
    },
    {
      id:5,
      name:"Ritesh"
    },
    {
      id:6,
      name:"Nilesh"
    },
    {
      id:7,
      name:"Titu"
    },
    {
      id:8,
      name:"shailvi"
    },
    {
      id:9,
      name:"Avani"
    },{
      id:10,
      name:"pari"
    }

    
  ];
  
  return(
    <View> 
      <Text style={{fontSize:31,textAlign:"center" , backgroundColor:'darkorchid',fontStyle:'italic'}}>!!Make Dynamic Grid!!</Text>
      <View style={{flex:1,flexDirection:"row",flexWrap:"wrap"}}>
        {
          users.map((item)=><Text style={styles.items}>{item.name}</Text>)
        }
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  items:{
    fontSize:25,
    padding:20,
    color:'#000080',
    fontStyle:'italic',
    height:125,
    width:125,
    textAlignVertical:'center',
    backgroundColor:'cyan',
    borderColor:'black',
    borderWidth:1,
    margin:5,
    textAlign:'center'
  }
});
export default App;
