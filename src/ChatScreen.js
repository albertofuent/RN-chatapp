import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';

let Dumpymessages = [
  { message: 'Hi', me: true },
  { message: 'Hello', me: false },
  { message: 'How are you?', me: true },
  { message: 'I am good', me: false },
  { message: 'Nice dude.', me: true },
]
export default function ChatScreen() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState(Dumpymessages);

  const handleMessageSend = () => {
    if (text.trim()) {
      setMessages([...messages, { message: text, me: true }]);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingParent}>
        <Text style={styles.headingText}>CHAT APP</Text>
      </View>
      <FlatList
        style={styles.listBg}
        data={messages}
        renderItem={({ item, index }) => {
          if (item.me) {
            return (
              <View style={styles.rightBubbleParent} key={index}>
                <Text style={styles.rightBubbleText} key={index}> {item.message}</Text>
                <View style={styles.rightArrow}>
                </View>
                <View style={styles.rightArrowOverlap}></View>
              </View>
            )
          }
          else {
            return (
              <View style={styles.leftBubbleParent} key={index}>
                <Text style={styles.leftBubbleText} key={index}> {item.message}</Text>
                <View style={styles.leftArrow}>
                </View>
                <View style={styles.leftArrowOverlap}></View>
              </View>
            )
          }
        }
        }
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(value) => setText(value)}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={handleMessageSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#fff',
  },
  rightArrow: {
    position: "absolute",
    backgroundColor: "#0078fe",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10
  },

  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "#000",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20

  },

  /*Arrow head for recevied messages*/
  leftArrow: {
    position: "absolute",
    backgroundColor: "#dedede",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10
  },

  leftArrowOverlap: {
    position: "absolute",
    backgroundColor: "#000",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20
  },
  leftBubbleParent: {
    backgroundColor: "#dedede",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginLeft: "5%",
    maxWidth: '50%',
    alignSelf: 'flex-start',
    borderRadius: 20,
  },
  leftBubbleText: {
    fontSize: 16,
    color: "#000",
    justifyContent: "center"
  },
  rightBubbleParent:{
    backgroundColor: "#0078fe",
    padding: 10,
    marginLeft: '45%',
    borderRadius: 5,
    marginTop: 5,
    marginRight: "5%",
    maxWidth: '50%',
    alignSelf: 'flex-end',
    borderRadius: 20,
  },
  rightBubbleText:{
    fontSize: 16,
    color: "#fff",
  },
  listBg:{
    backgroundColor: "#000"
  },

  headingParent:{
    justifyContent: 'center',
     alignItems: "center", 
     borderWidth: 1
  },
  headingText:{
    fontSize: 20
  }
});

