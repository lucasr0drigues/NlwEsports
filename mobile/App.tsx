import { Background } from "./src/components/background";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      ></StatusBar>
    </Background>
  );
}
