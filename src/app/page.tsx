import DiariesContainer from "./components/template/DiariesContainer";
import PageAside from "./components/molecules/PageAside/PageAside";
export default async function Page() {
  return (
    <>
      <div className=" grid grid-cols-[0.1fr_1fr] grid-rows-1">
        <PageAside />
        <DiariesContainer />
      </div>
    </>
  );
}
