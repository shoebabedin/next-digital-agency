import Link from "next/link";
import { useState } from "react";

const ToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  global.window && window.addEventListener("scroll", toggleVisible);

  return (
    <Link href="#" id="button" onClick={scrollToTop} style={{display: visible ? 'flex' : 'none'}}>
      <svg
        width="13"
        height="10"
        viewBox="0 0 13 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0601 9.99975H1.94016C1.58012 10.0003 1.22729 9.89525 0.922511 9.69679C0.617734 9.49833 0.373471 9.21456 0.217998 8.87834C0.0359981 8.4794 -0.0341006 8.03556 0.0156893 7.59738C0.0654793 7.15921 0.233155 6.74432 0.49961 6.40001L5.05956 0.680797C5.2385 0.467022 5.45975 0.295573 5.70829 0.17807C5.95684 0.0605661 6.22688 -0.000246372 6.50011 -0.000246372C6.77334 -0.000246372 7.04338 0.0605661 7.29192 0.17807C7.54047 0.295573 7.76171 0.467022 7.94066 0.680797L12.5006 6.40001C12.7671 6.74432 12.9347 7.15921 12.9845 7.59738C13.0343 8.03556 12.9642 8.4794 12.7822 8.87834C12.6267 9.21456 12.3825 9.49833 12.0777 9.69679C11.7729 9.89525 11.4201 10.0003 11.0601 9.99975Z"
          fill="white"
        />
      </svg>
    </Link>
  );
};

export default ToTop;
