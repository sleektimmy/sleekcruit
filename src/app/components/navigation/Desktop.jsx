import NavData from "./NavData";

export default function Desktop() {
  return (
    <ul className="md:flex md:flex-row hidden justify-around items-center text-slate-50 bg-black h-32  text-2xl capitalize">
      <NavData />
    </ul>
  );
}
