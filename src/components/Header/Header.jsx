// import { useState } from 'react';
// import TopPost from '../TopPost';
import SiteNav from '../SiteNav';
import MenuHeader from '../MenuHeader';

const Header = () => {
  // const [topPost, setTopPost] = useState(true);

  return (
    <>
      {/* {topPost && <TopPost setTopPost={setTopPost} />} */}

      <SiteNav />
      <MenuHeader />
    </>
  );
};

export default Header;
