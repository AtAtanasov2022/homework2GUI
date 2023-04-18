import React, { useState } from 'react';

function App() {
  const [showBanner, setShowBanner] = useState(true);

  const handleClick = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <body>
          <header>
            <div className=' font-avenir-book text-10 tracking-tighter fixed top-0 left-0 w-full h-8 bg-promotion-green text-white flex justify-center items-center'>
              <p className="text-center">FREE DELIVERY AND FREE RETURNS</p>
              <button className='absolute top-1 right-1 h-5 px-5 text-white ' onClick={handleClick}>X</button>
            </div>
            <div class="searchAndNav">
              <div class="topBanner">
                <div class="logo">
                  <a href="#">
                    <img src="./img/wallpaperit-logo.png" alt="image"></img>
                    {/* <img src="" alt="image"></img> */}
                  </a>
                </div>
                <div class="searchBar">
                  <form>
                    <input type="search" placeholder="Search for products..."></input>
                      <img src="../img/magnifying-glass.jpg" alt="magnifying glass"></img>
                        {/* <!-- <i id="magnifyingGlass"></i> --> */}
                  </form>
                </div>
                    <div class="iconWrapper">
                      <div>
                        <a class="imgIconsContainers" href="#">
                          <img class="imgIcons" src="./img/avatar2.png" alt="avatar"></img>
                            <span class="iconsText">Sign in</span>
                        </a>
                      </div>
                      <div>
                        <a class="imgIconsContainers" href="#">
                          <img class="imgIcons" src="./img/heart.png" alt="heart"></img>
                            <span class="iconsText">Wishlist</span>
                        </a>
                      </div>
                      <div>
                        <a class="imgIconsContainers" href="#">
                          <img class="imgIcons" src="./img/shopping-bag.jpg" alt="shopping bag"></img>
                            <span class="iconsText">Bag</span>
                        </a>
                      </div>
                    </div>
                </div>
                <div class="navBar">
                  <nav id="navigation" role="navigation">
                    <ul>
                      <li>
                        <span class="liSpanNav">
                          <a href="#" onmouseover="showMenu('wallpaper')"
                            onmouseout="hideMenu('wallpaper')">WALLPAPER</a>
                          <img src="img/arrowDown.png" alt=""></img>
                        </span>
                        <div id="wallpaper" class="submenu" onmouseover="showMenu('wallpaper')"
                          onmouseout="hideMenu('wallpaper')">
                          <ul>
                            <li>
                              <a class="shopItemsCategories" href="#">Shop By Design</a>
                              <ul class="subShopItems">
                                <li>Animal</li>
                                <li>Bird</li>
                                <li>Brick</li>
                                <li>Damask</li>
                                <li>Fioral</li>
                                <li>Geometric</li>
                                <li>Leaves</li>
                                <li>Plain</li>
                                <li>Strype</li>
                                <li>Tile</li>
                                <li>Trail</li>
                                <li>Trees</li>
                                <li>Wood</li>
                              </ul>
                            </li>
                            <li>
                              <a class="shopItemsCategories" href="#">Shop By Color</a>
                              <ul class="subShopItems">
                                <li>Black</li>
                                <li>Blue</li>
                                <li>Brown</li>
                                <li>Cream</li>
                                <li>Glitter</li>
                                <li>Gold</li>
                                <li>Green</li>
                                <li>Gray</li>
                                <li>Metalic</li>
                                <li>Neutral</li>
                                <li>Pink</li>
                                <li>Purple</li>
                                <li>Red</li>
                                <li>Rose Gold</li>
                                <li>Silver</li>
                                <li>Teal</li>
                                <li>White</li>
                                <li>Yellow</li>
                              </ul>
                            </li>
                            <li>
                              <a class="shopItemsCategories" href="#">Shop By Room</a>
                              <ul class="subShopItems">
                                <li>Bathroom</li>
                                <li>Bedroom</li>
                                <li>Dining room</li>
                                <li>Hall</li>
                                <li>Kids</li>
                                <li>Kitchen</li>
                                <li>Living room</li>
                              </ul>
                            </li>
                            <li>
                              <a class="shopItemsCategories" href="#">Shop By Brand</a>
                              <ul class="subShopItems">
                                <li>Envy</li>
                                <li>Joules</li>
                                <li>Joules kids</li>
                                <li>Laura Ashley</li>
                                <li>Next</li>
                                <li>Superfresco Easy</li>
                              </ul>
                            </li>
                          </ul>
                          <img src="img/wpNavImage.png"></img>
                        </div>
                      </li>
                      <li>
                        <span class="liSpanNav">
                          <a href="#" onmouseover="showMenu('paint')" onmouseout="hideMenu('paint')">PAINT</a>
                          <img src="img/arrowDown.png" alt=""></img>
                        </span>
                        <div id="paint" class="submenu" onmouseover="showMenu('paint')"
                          onmouseout="hideMenu('paint')">
                          <ul>
                            <li>
                              <a class="shopItemsCategories" href="#">Paint By Color</a>
                              <ul class="subShopItems">
                                <li>Blue</li>
                                <li>Green</li>
                                <li>Grey</li>
                                <li>Neutral</li>
                                <li>Pink</li>
                                <li>Purple</li>
                                <li>White</li>
                              </ul>
                            </li>
                            <li>
                              <a class="shopItemsCategories" href="#">Paint By Style</a>
                              <ul class="subShopItems">
                                <li>Interior Wall</li>
                                <li>Bathroom</li>
                                <li>Kitchen</li>
                                <li>Extior Eggshell</li>
                                <li>Garden</li>
                              </ul>
                            </li>
                            <li>
                              <a class="shopItemsCategories" href="#">Paint By Brand</a>
                              <ul class="subShopItems">
                                <li>Next</li>
                                <li>Laura Ashley</li>
                                <li>Joules</li>
                                <li>Superfresco Easy</li>
                              </ul>
                            </li>
                          </ul>
                          <img src="img/paintNavImg.png"></img>
                        </div>
                      </li>
                      <li>
                        <span class="liSpanNav">
                          <a href="#" onmouseover="showMenu('brands')" onmouseout="hideMenu('brands')">BRANDS</a>
                          <img src="img/arrowDown.png" alt=""></img>
                        </span>

                        <div id="brands" class="submenu" onmouseover="showMenu('brands')"
                          onmouseout="hideMenu('brands')">
                          <ul>
                            <li>
                              <a class="shopItemsCategories" href="#">Shop By Brand</a>
                              <ul class="subShopItems">
                                <li>Envy</li>
                                <li>Joules</li>
                                <li>Laura Ashley</li>
                                <li>Next</li>
                                <li>Superfresco Easy Paint</li>
                                <li>Superfresco Easy</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li><a href="#">WALL MURALS</a></li>
                      <li>
                        <span class="liSpanNav">
                          <a href="#" onmouseover="showMenu('wallArt')" onmouseout="hideMenu('wallArt')">WALL
                            ART</a>
                          <img src="img/arrowDown.png" alt=""></img>
                        </span>
                        <div id="wallArt" class="submenu" onmouseover="showMenu('wallArt')"
                          onmouseout="hideMenu('wallArt')">
                          <ul>
                            <li>
                              <a class="shopItemsCategories" href="#">Shop By Type</a>
                              <ul class="subShopItems">
                                <li>Canvas Wall Art</li>
                                <li>Framed Wall Art</li>
                                <li>Clocks</li>
                              </ul>
                            </li>
                            <li>
                              <a class="shopItemsCategories" href="#">Shop By Color</a>
                              <ul class="subShopItems">
                                <li>Black</li>
                                <li>Blue</li>
                                <li>Brown</li>
                                <li>Green</li>
                                <li>Grey</li>
                                <li>Neutral</li>
                                <li>Orange</li>
                                <li>Pink</li>
                                <li>Purple</li>
                                <li>Red</li>
                                <li>Yellow</li>
                              </ul>
                            </li>
                          </ul>
                          <img src="img/wallArtImg.png"></img>
                        </div>
                      </li>
                      <li><a href="#">SALE</a></li>
                    </ul>
                  </nav>
                </div>
            </div>
          </header>
        </body>
      )}
    </>
  );
}

export default App;
