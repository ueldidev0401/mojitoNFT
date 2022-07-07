import Meta from "components/Meta"; // Components: Meta
import Nav from "components/Nav"; // Components: Nav
import Header from "components/Header"; // Components: Header
import type { ReactElement } from "react"; // Types
import { useState } from "react" // State management
import classNames from "classnames"
import styles from "styles/components/Layout.module.scss"; // Component styles

export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {

  // Action menu open state
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
console.log(mobileMenuIsOpen)
  return (
    // Layout wrapper
    <div className={classNames(styles.layout, "dark")}>
      {/* Site meta */}
      <Meta/>

      {/* Global nav */}
      <Nav mobileMenuIsOpen={mobileMenuIsOpen} setMobileMenuIsOpen={setMobileMenuIsOpen}/>

      {/* Injected child content */}
      <div className={classNames("pl-[0px] md:pl-[224px] v-main md:ml-[0px] min-h-screen h-full bg-white dark:bg-black")}>
        <Header setMobileMenuIsOpen={setMobileMenuIsOpen}/>
        {children}
      </div>

    </div>
  );
}
