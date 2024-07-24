import { InvitacionProvider } from "./context/InvitacionContext";
import Invitacion from "./components/Invitacion";
import "./App.css";

function App() {
  return (
    <InvitacionProvider>
      <Invitacion />
    </InvitacionProvider>
  );
}

export default App;
