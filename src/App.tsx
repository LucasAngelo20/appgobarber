import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
//import { hideNavigationBar } from "react-native-navigation-bar-color";

import React from "react";
import { View, StatusBar } from "react-native";

import Routes from "./routes";

const App: React.FC = () => {
  //hideNavigationBar();

  return (
    <>
      <StatusBar
        backgroundColor="#312e38"
        barStyle="light-content"
      />
      <NavigationContainer>
        <View style={{ backgroundColor: "#312e38", flex: 1 }}>
          <Routes />
        </View>
      </NavigationContainer>
    </>
  );
};

export default App;
