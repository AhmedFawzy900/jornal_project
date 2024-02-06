import { useEffect, useState } from "react";

export default function GoToTop(){

    const [showButton, setShowButton] = useState(false);

  // Add a scroll event listener to the window
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // Show the button if the scroll position is more than 300 pixels
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // Define a function to scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smooth scrolling
    });
  };


    return(
        <div>
            {showButton &&(
                <button className="toTop" onClick={scrollToTop}>
                    <i class="fa-solid fa-angle-up"></i>
                </button>
            )}
        </div>
    );
}