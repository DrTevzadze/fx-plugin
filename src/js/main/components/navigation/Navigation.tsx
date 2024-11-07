import styles from "./Navigation.module.css";

function Navigation() {
  const handleNavigation = (tab: string) => {
    if (tab === "tutorial") {
      window.open("https://example.com", "_blank"); // Open tutorial link in new tab
    }
    // You can add logic here if Help or other sections need custom handling
  };

  return (
    <nav className={styles.navigation}>
      <ul>
        <li className={`${styles.navItem} ${styles.packsItem}`}>
          PACKS
          {/* This nested <ul> will be shown on hover */}
          <ul className={styles.dropdown}>
            <li>Factory Presets v1.3</li>
            <li>Transitions Master Bundle v3.3</li>
            <li>Film Emulation Presets v1.3</li>
            <li>CRT Textures & Overlays v2.0</li>
            <li>Text Animation Presets v1.0</li>
            <li>Cinematic Movie Posters v1.8</li>
            <li className={styles.install}>Install Pack</li>
          </ul>
        </li>
        <li
          className={styles.navItem}
          onClick={() => handleNavigation("assets")}
        >
          ASSETS
        </li>
        <li
          className={styles.navItem}
          onClick={() => handleNavigation("store")}
        >
          STORE
        </li>
        <li className={styles.navItem} onClick={() => handleNavigation("help")}>
          HELP
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
