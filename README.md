 #  :iphone: MusicFirst - a React Native Mobile App :iphone:
 
## What this project is about:

Hackaton challenge showcasing my ability to learn something new in 2,5 days during my time at Codaisseur. Final week of the bootcamp. 
<br/> **THIS IS THE CLIENT**. 
<br/> See **[related repositories](#related-repositories)** for the server side.

Rules: 
- You have 3 days to make the most awesome app
- You have to use some new technology you have not tried
- You have to incorporate the theme of this hackaton: 

Theme (randomly selected): :money_with_wings:

## Project description

I choose to use React Native to build a a music festival app that makes payment easy for the attendees.
<br/> My idea come from the many festivals I've attended where the payment is always tricky. During a festival you want to focus on what's important - the music, that's why this app **MusicFirst** was built to enable a modern festival. 

- It should be easy to pay with your phone and then add who you’re paying for by adding that persons name to the order. The idea is then that the person will get an “invoice” to their profile page. 
- I've decided to use PayPal as it's an international payment system

## Related repositories

**[The backend can be found here](https://github.com/evelinawahlstrom/MusicFirst-nodejs)**

## Table of contents:
- **[Technologies used](#technologies-used)**
- **[How to install](#how-to-install)**
- **[Create React Native Docs](#create-react-native)**
- **[Features working](#features-working)**
- **[Gif showing my React-Native App](#gif-showing-my-react-native-app)**
- **[My progress](#my-progress)**
- **[To do](#to-do)**

## Technologies used
React-Native, Expo

## How to install

The instructions below are for Mac users.

### :woman_technologist: Before being able to install the app and make it run you need to have: :woman_technologist:
- **[Expo](https://expo.io/learn)**
- and **[Xcode](https://apps.apple.com/se/app/xcode/id497799835?l=en&mt=12)**

1. Clone the git repository

``` git clone https://github.com/evelinawahlstrom/MusicFirst-reactNative ```

2. cd into the folder MusicFirst-reactNative

3. In your terminal 

Assuming that you have Node 10 LTS or greater installed, you can use npm to install the Expo CLI command line utility:
```
npm install -g expo-cli
```
THEN run the following command to install all the dependencies

```
npm install
```

- Before launching the app, please make sure that the server side is up and running.
  <br/> --> Checkout the **[Server ReadMe](https://github.com/evelinawahlstrom/MusicFirst-nodejs)** to install and run the server.

4. Start the app with

```expo start ``` **OR** ```npm start ```

 ```press i to launch the app on iOS using XCode```
 
 5. When the window "run with expo" shows:
 
 ```click run```

## Create React Native App with the help of Expo

**The docs for creating a React Native App can be found [HERE](https://facebook.github.io/react-native/docs/getting-started)**
<br/>
**Expo QuickStart [HERE](https://docs.expo.io/versions/latest/)**

## Features working 
- The hamburger menu is working and exist in the upper right corner. 
- It's possible to view each of the menu items in the hamburger menu
- The PAYMENT (named: $$$) side is working, integrated with PayPal ( a sandbox account for developing process ) and by clicking on the upper space in the middle, you get redirected to a PayPal account to pay.

## Gif showing my React-Native App
![musicFirst1](https://user-images.githubusercontent.com/54844766/70535673-bfae4880-1b5d-11ea-907d-86f623f496be.gif)


## My progress
As I only had 2,5 days to finish the app and one of the rules were to use a to me, new technology. I began to read the React Native docs and watch some tutorials <br/>
- I found **[this youtube crash course helpful](https://www.youtube.com/watch?v=qSRrxpdMpVc)**
- I used **[this article to read about PayPal integration](https://medium.com/@adityasingh_32512/integrating-paypal-in-your-react-native-app-4dcf89e11dd)**

## To do
- Add other payment solutions like SWISH (Swedish payment method), costsplit, KLARNA etc
- Change the hamburger meny from being in the middle of the page $$$
- Make it possible to add FRIENDS
- Develop each individual page like DRINKS, EAT etc with content
