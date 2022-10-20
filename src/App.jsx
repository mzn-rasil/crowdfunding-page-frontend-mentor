import Card from "./components/ui/Card";
import { createPortal } from "react-dom";
import { Fragment, useState } from "react";
import { PRODUCTS } from "./assets/data/Products";
import PledgeModal from "./components/modal/PledgeModal";
import ThanksModal from "./components/modal/ThanksModal";
import { useModal } from "./lib/useModal";

import { Bookmark } from "./assets/svg/Bookmark";
import DesktopHeroImage from "./assets/images/image-hero-desktop.jpg";
import { Hamburger } from "./assets/svg/Hamburger";
import { IconCloseMenu } from "./assets/svg/IconCloseMenu";
import { Logo } from "./assets/svg/Logo";
import { MastercraftLogo } from "./assets/svg/MastercraftLogo";
import MobileHeroImage from "./assets/images/image-hero-mobile.jpg";

function App() {
  const [isModalOpen, openModalHandler, closeModalHandler] = useModal();
  const [thanksModalOpen, openThanksModalHandler, closeThanksModalHandler] = useModal();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleBookmarkHandler = () => (
    setIsBookmarked(prevIsBookmarked => !prevIsBookmarked)
  );

  const toggleMenuHandler = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  }

  return (
    <Fragment>
      <header className="flex items-center">
        <nav className="h-24 container mx-auto max-w-7xl px-4 sm:px-6 xl:px-8 flex justify-between items-center bg-black">
          <div className="relative z-40">
            <Logo />
          </div>

          <ul className="relative z-40 hidden text-slate-100 gap-20 text-sm md:flex">
            <li className="hover:cursor-pointer">About</li>
            <li className="hover:cursor-pointer">Discover</li>
            <li className="hover:cursor-pointer">Get Started</li>
          </ul>

          <div className="relative z-40 flex md:hidden" onClick={toggleMenuHandler}>
            {
              isMenuOpen ?
                <IconCloseMenu /> :
                <Hamburger />
            }
          </div>
        </nav>
      </header>

      <div id="menu-modal" className="md:hidden"></div>
      {
        isMenuOpen &&
        createPortal(
          <div className="z-50 absolute right-0 container max-w-md px-4">
            <ul className="bg-white flex flex-col divide-y-2 rounded-lg">
              <li className="hover:cursor-pointer py-4 pl-4 font-bold">About</li>
              <li className="hover:cursor-pointer py-4 pl-4 font-bold">Discover</li>
              <li className="hover:cursor-pointer py-4 pl-4 font-bold">Get Started</li>
            </ul>
          </div>,
          document.getElementById("menu-modal")
        )
      }

      <div className="z-0 -mt-24 md:hidden">
        <img src={MobileHeroImage} alt="Mobile hero image" />
      </div>

      <div className="z-0 -mt-24 hidden md:block">
        <img src={DesktopHeroImage} alt="Mobile hero image" className="w-full" />
      </div>

      <main className="container max-w-3xl mx-auto px-6 -mt-12 pb-16 bg-slate-50">
        <Card>
          <div className="z-10 -mt-14 absolute left-1/2 -translate-x-1/2">
            <MastercraftLogo />
          </div>

          <h2 className="text-center mt-8 font-bold text-2xl tracking-wide">Mastercraft Bamboo Monitor Riser</h2>

          <p className="text-center mt-4 text-neutral-dark-gray px-4 md:text-base">
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
          </p>

          <div className="flex space-x-4 justify-center mt-6 px-10 md:justify-between">
            <button
              className="w-32 p-2 bg-primary-moderate-cyan flex-auto rounded-full text-white font-bold md:flex-initial md:w-48 hover:bg-primary-dark-cyan"
              onClick={openModalHandler}
            >
              Back this project
            </button>

            <button onClick={toggleBookmarkHandler}>
              <span className="flex items-center">
                <Bookmark
                  fillColor={isBookmarked ? "hsl(176, 72%, 28%)" : "#2F2F2F"}
                  pathFill={isBookmarked ? "white" : "#B1B1B1"}
                />
                {/*<img src="../src/assets/images/icon-bookmark.svg" alt="Bookmark icon" className="fill-current" />*/}
                <span className={`relative -z-10 hidden bg-slate-200 py-4 -ml-6 w-36 rounded-r-full font-bold ${isBookmarked ? "text-primary-dark-cyan" : "text-neutral-dark-gray"} md:block`}>Bookmark</span>
              </span>
            </button>
          </div>
        </Card>

        <Card className="px-8 space-y-6 md:px-12 md:py-20 md:space-y-12">
          <div className="flex flex-col items-center divide-y-2 md:flex-row md:divide-x-2 md:justify-center md:divide-y-0">
            <div className="flex flex-col items-center space-y-2 pb-4 md:space-y-0 md:pb-0 md:w-1/3">
              <span className="block text-2xl font-bold">$89,914</span>
              <span className="block text-sm text-neutral-dark-gray">of $100,000 backed</span>
            </div>
            <div className="flex flex-col items-center space-y-2 py-4 md:space-y-0 md:py-0 md:w-1/3">
              <span className="block text-2xl font-bold">5,007</span>
              <span className="block text-sm text-neutral-dark-gray">total backers</span>
            </div>
            <div className="flex flex-col items-center space-y-2 py-4 md:space-y-0 md:py-0 md:w-1/3">
              <span className="block text-2xl font-bold">56</span>
              <span className="block text-sm text-neutral-dark-gray pb-4 md:pb-0">days left</span>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-primary-moderate-cyan h-2.5 rounded-full w-10/12"></div>
          </div>
        </Card>

        <Card className="px-8">
          <h2 className="text-2xl font-bold tracking-tight py-6">About this project</h2>

          <p className="text-sm text-neutral-dark-gray tracking-tight leading-relaxed md:text-base">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          </p>

          <p className="text-sm text-neutral-dark-gray tracking-tight leading-relaxed mt-4 md:text-base">
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
            to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>

          {
            PRODUCTS.map(product => (
              <Card
                key={product.id}
                className={`border border-slate-200 mt-8 px-6 ${product.itemsLeft === 0 ? "opacity-40" : ""}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between md:mb-6">
                  <h3 className="font-bold text-lg md:inline-flex">{product.name}</h3>
                  <span className="block text-base text-primary-moderate-cyan font-medium mb-6 md:mb-0">Pledge ${product.pledge} or more</span>
                </div>

                <p className="text-sm text-neutral-dark-gray leading-relaxed tracking-tight mb-4 md:text-base">{product.description}</p>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between md:mt-6">
                  <span className="font-bold text-4xl flex items-center gap-2">
                    {product.itemsLeft}
                    <span className="text-base font-thin text-neutral-dark-gray">left</span>
                  </span>
                  <button
                    className={`mt-8 bg-primary-moderate-cyan p-3 w-40 rounded-full text-white font-bold md:mt-0 ${product.itemsLeft === 0 ? "bg-neutral-dark-gray" : ""} hover:bg-primary-dark-cyan`}
                    disabled={product.itemsLeft ? false : true}
                  >
                    {product.itemsLeft ? "Select Reward" : "Out of stock"}
                  </button>
                </div>
              </Card>
            ))
          }
        </Card>
      </main>

      {
        isModalOpen &&
        (
          <PledgeModal
            onThanksModalOpen={openThanksModalHandler}
            onClose={closeModalHandler}
          />
        )
      }
      {
        thanksModalOpen &&
        (
          <ThanksModal
            onClose={closeThanksModalHandler}
          />
        )
      }
    </Fragment>
  )
}

export default App;
