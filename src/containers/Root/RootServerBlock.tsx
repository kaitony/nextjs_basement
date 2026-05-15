import Layout from "@/components/Layout";
import RootClientBlock from "@/containers/Root/RootClientBlock";

export default function RootServerBlock() {
  return (
    <Layout>
      <div className="flex flex-1 justify-center items-center">
        <RootClientBlock />
      </div>
    </Layout>
  );
}
