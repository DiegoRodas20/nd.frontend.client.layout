import { MainHeader } from "./components/main-header/MainHeader";
import { TopHeader } from "./components/top-header/TopHeader";

export function Header() {
  return (
    <header className="z-index-11">
      <div className="tp-header-area p-relative">
        <TopHeader></TopHeader>
        <MainHeader></MainHeader>
      </div>
    </header>
  );
}
