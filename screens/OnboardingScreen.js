import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dot = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor
      }}
    />
  )
}

const Skip = ({...props}) => (
  <Button
    title='Skip'
    color="#000000"
    backgroundColor="none"
    {...props}
  />
)

const Next = ({...props}) => (
  <Button
    title='Next'
    color="#000000"
    {...props}
  />
)

const Done = ({...props}) => (
  <Button
    title='Done'
    color="#000000"
    {...props}
  />
)

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dot}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Light it up',
          subtitle: 'Share your journey and thoughts with the world',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Like',
          subtitle: 'Connecting people, one feed at a time!',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Dynamite!',
          subtitle: 'Move forward and create your own world',
        },
    ]}
/>
  )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    margin: 10,
  }
})
