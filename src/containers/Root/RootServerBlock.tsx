import DefaultLayout from "@/components/defaultLayout";
import RootClientBlock from "@/containers/Root/RootClientBlock";

export default function RootServerBlock() {
  return (
    <DefaultLayout>
      <div className="flex flex-1 justify-center items-center">
        <RootClientBlock />
      </div>
    </DefaultLayout>
  );
}
