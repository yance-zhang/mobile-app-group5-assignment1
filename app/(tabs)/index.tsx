import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import React from 'react';

export default function TabOneScreen() {
  const messages = [
    { text: 'lol the classic "should i go to the show...', sender: 'nelly', time: '32m' },
    { text: 'Mike: Yeah I love that design, i wonder...', sender: 'DND Group', time: '24m' },
    { text: 'yaaa, sounds great', sender: 'erica', time: '1h' },
    { text: 'shoot u a text in a bit, but i maybe bus...', sender: 'steve', time: '2h' },
    { text: 'dude did you see that video i sent you?', sender: 'Helio', time: '2h' },
    { text: 'Caitlyn: lol at last night when you rolle...', sender: 'Destiny Raid', time: '4h' },
    { text: 'ggs! goodnight', sender: 'reb', time: '9h' },
  ];
  const images = [
    { uri: 'https://discordapp.com/assets/6debd47ed13483642cf09e832ed0bc1b.png' },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      {messages.map((m, index) => (
        <View key={`${m.sender}-${index}`} style={styles.messageRow}>
          <View style={styles.imageColumn}>
            {images.map((img, imgIndex) => (
              <Image key={`${img.uri}-${imgIndex}`} source={{ uri: img.uri }} style={styles.avatar} />
            ))}
          </View>

          <View style={styles.messageBody}>
            <View style={styles.headerRow}>
              <Text style={styles.sender}>{m.sender}</Text>
              <Text style={styles.time}>{m.time}</Text>
            </View>
            <Text style={styles.messageText}>{m.text}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    overflowY: 'scroll',
    backgroundColor: '#36393F',
  },
  header: {
    height: 50,
    padding: 20,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    padding: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: '#dcddde',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  messageList: {
    width: '100%',
  },
  messageRow: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#36393F',
  },
  imageColumn: {
    width: 50,
    marginRight: 12,
    backgroundColor: '#36393F',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
  },
  messageBody: {
    flex: 1,
    backgroundColor: '#36393F',
  },
  headerRow: {
    marginBottom: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#36393F',
  },
  sender: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ffffff',
  },
  time: {
    fontSize: 11,
    color: '#a9a9a9',
  },
  messageText: {
    flexShrink: 1,
    fontSize: 14,
    lineHeight: 20,
    color: '#dcddde',
  },
});
