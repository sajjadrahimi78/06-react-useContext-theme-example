import Button from "./Button";
import Panel from "./Panel";

export default function Form() {
  // ? we don't need theme props hear

  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}
