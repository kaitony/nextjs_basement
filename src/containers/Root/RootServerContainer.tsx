import RootClientContainer from "./RootClientContainer";
import RootServerBlock from "./RootServerBlock";

export default function RootServerContainer() {
  return (
    <RootClientContainer>
      <RootServerBlock />
    </RootClientContainer>
  );
}
