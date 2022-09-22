import { Download, Features, SectionWrapper } from "./components";

import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your store of NFTs. Start Selling or Buying."
        description="Buy, Store, Collect NFTs, Exchange and Earn Crypto. Join 25+ Million users already use NFT Marketplace."
        showBtn
        mockUpImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Smart UI Marketplace."
        description="Experience a smooth UI of NFT Marketplace."
        mockUpImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper
        title="Deployment."
        description="NFT Marketplace is built using Expo which is cross-platform. You can easily get your app from any OS."
        mockUpImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title="Creative way to showcase the store."
        description="The app contains two screens first screen list all NFTs and other show details of a current NFT."
        mockUpImg={assets.mockup}
        banner="banner02"
        reverse
      />

      <Download />

      <div
        className={`px-4 py-2 flex-col items-center justify-center ${styles.bgPrimary} text-center banner04`}
      >
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made By <span className="bold">Shubham Siwach</span>
        </p>
      </div>
    </>
  );
};

export { App };
