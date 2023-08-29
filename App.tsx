import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import HoleCard from './src/components/HoleCard';
import DATA from './src/constants/DATA';

const App = () => {
  const [data, setData] = useState(DATA);
  const [score, setScore] = useState(0);
  const [prevHoles, setPrevHole] = useState(0);

  const renderItem = ({item}: any) => (
    <HoleCard item={item} score={score} setScore={setScore} />
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const random = RandomNumber() 
      setPrevHole(random)
      const mappedList = DATA.map(x => {
        if (x.id == random) {
          x.isMole = true;
        } else {
          x.isMole = false;
        }
        return x;
      });
      setData(mappedList);
    }, 14200);

    return () => clearInterval(intervalId);
  }, []);

  const RandomNumber =():number=>{
    let random
  do {
     random = Math.floor(Math.random() * 6) + 1;

  }while (random ==prevHoles)    
  return random
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.score} onPress={()=>setScore(0)}>Reset</Text>
        <Text style={styles.score}>Score : {score}</Text>
      </View>
      <View style={styles.holes}>
        <FlatList data={data} renderItem={renderItem} numColumns={3} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD9C0',
  },
  holes: {
    marginTop: 150,
    height: 400,
  },
  header: {
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  score: {
    fontSize: 45,
    color: 'black',
    fontWeight: 'bold',
  },
});
