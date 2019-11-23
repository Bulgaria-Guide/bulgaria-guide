import React from "react";
import View from "../View";

const style = {
    "margin-top": "100px"
  },
  ContainerLayout = props => (
    <View className="container" style={style}>
      <h1 className="center">{props.header}</h1>
      {props.children}
    </View>
  );

export default ContainerLayout;
