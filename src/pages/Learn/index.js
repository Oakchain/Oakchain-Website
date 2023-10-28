import React, { useState } from 'react';
import AuthGuard from '../../Layout/AuthGuard';
import bannerImg from '../../assets/images/hand-banner.svg';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../../assets/style/learn.css';

const Learn = () => {
    const [dropdownOpen, setDropdownOpen] = useState({
        introToWeb3: false,
        nfts: false,
        defi: false,
        daos: false,
        breakingIntoWeb3: false,
        web3Reference: false,
      });
    
      const toggleDropdown = (dropdownName) => {
        setDropdownOpen({
          ...dropdownOpen,
          [dropdownName]: !dropdownOpen[dropdownName],
        });
      };
    
  return (
    <AuthGuard>
      <div className="oak-container-fluid">
        <div className="oak-home-bannerr d-flex position-relative oak-mb">
          <div className="oak-bannerr__text-wrapper">
            <h5 className="oak-bannerr-header mb-4">Learn about Web3</h5>
          </div>
          <div className="position-absolute oak-home__bannerr-img">
            <img src={bannerImg} alt="bannerr-img" />
          </div>
        </div>

        <section className="oak-container-fluid oak-mb oak-content">
          <div className="oak-content-left_text-wrapper">
            <h3 className="oak-content-left-header">Content</h3>
            <div className="oak-content-left-header-bar"></div>
            <ul className='oak-content-dropdown'>
            <li>
                <button onClick={() => toggleDropdown('introToWeb3')}>
                  <p>Intro to Web3</p> <p>></p>
                </button>
                {dropdownOpen.introToWeb3 && (
                  <ul className="oak-content-a-dropdown">
                    <li><a href="">What is Web3?</a></li>
                    <li><a href="">What is blockchain?</a></li>
                    <li><a href="">What is Bitcoin?</a></li>
                    <li><a href="">What is Ethereum?</a></li>
                    <li><a href="">Why invest in crypto?</a></li>
                    <li><a href="">How to use a hot wallet?</a></li>
                    <li><a href="">How to use a cold wallet?</a></li>
                    <li><a href="">How to avoid wallet scams?</a></li>
                    <li><a href="">How to get an ens domain?</a></li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => toggleDropdown('nfts')}>
                  <p>NFTs</p> <p>></p>
                </button>
                {dropdownOpen.nfts && (
                  <ul className="oak-content-a-dropdown">
                    <li><a href="">What is Ethereum?</a></li>
                    <li><a href="">Why invest in crypto?</a></li>
                    <li><a href="">How to use a hot wallet?</a></li>
                    <li><a href="">How to use a cold wallet?</a></li>
                    <li><a href="">How to avoid wallet scams?</a></li>
                    <li><a href="">How to get an ens domain?</a></li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => toggleDropdown('defi')}>
                  <p>DeFi</p> <p>></p>
                </button>
                {dropdownOpen.defi && (
                  <ul className="oak-content-a-dropdown">
                    <li><a href="">What is Web3?</a></li>
                    <li><a href="">What is blockchain?</a></li>
                    <li><a href="">What is Bitcoin?</a></li>
                    <li><a href="">What is Ethereum?</a></li>
                    <li><a href="">Why invest in crypto?</a></li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => toggleDropdown('daos')}>
                  <p>DAOs</p> <p>></p>
                </button>
                {dropdownOpen.daos && (
                  <ul className="oak-content-a-dropdown">
                    <li><a href="">What is Web3?</a></li>
                    <li><a href="">What is blockchain?</a></li>
                    <li><a href="">How to use a cold wallet?</a></li>
                    <li><a href="">How to avoid wallet scams?</a></li>
                    <li><a href="">How to get an ens domain?</a></li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => toggleDropdown('breakingIntoWeb3')}>
                  <p>Breaking into Web3</p> <p>></p>
                </button>
                {dropdownOpen.breakingIntoWeb3 && (
                  <ul className="oak-content-a-dropdown">
                    <li><a href="">What is Web3?</a></li>
                    <li><a href="">Why invest in crypto?</a></li>
                    <li><a href="">How to use a hot wallet?</a></li>
                    <li><a href="">How to use a cold wallet?</a></li>
                    <li><a href="">How to avoid wallet scams?</a></li>
                    <li><a href="">How to get an ens domain?</a></li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => toggleDropdown('web3Reference')}>
                  <p>Web3 Reference</p> <p>></p>
                </button>
                {dropdownOpen.web3Reference && (
                  <ul className="oak-content-a-dropdown">
                    <li><a href="">What is Web3?</a></li>
                    <li><a href="">How to avoid wallet scams?</a></li>
                    <li><a href="">How to get an ens domain?</a></li>
                  </ul>
                )}
              </li>

            </ul>
          </div>
          <div className="oak-content-right_text-wrapper">
            <h3 className='oak-content-right-header'>Intro to Web3</h3>
            <p className='oak-content-right-subheader1 col-6'>Start here if you're new to web3. Learn the core concepts, how to buy cryptocurrencies, and how to set up and secure your crypto wallet.</p>
            <h3 className='oak-content-right-subheader'>What is Web3</h3>
            <p className='oak-content-right-subheader2'>Lorem ipsum dolor sit amet consectetur. Sed aliquet sem urna amet semper lacus. Rutrum natoque faucibus dui pellentesque turpis lorem mauris elit. Nisl aliquet malesuada pellentesque tristique risus sit. Sed viverra gravida sit vitae. Nulla et malesuada at nunc nulla natoque vitae ut eu.
Imperdiet congue et massa aliquam risus. Imperdiet senectus sed tellus nam. Imperdiet ipsum egestas praesent sit proin sit consectetur commodo blandit. Ut ac sed vitae ac elementum. Urna sit iaculis sed neque tellus purus sagittis. Ut ipsum quis diam hendrerit feugiat volutpat aliquet. Cras eget ut facilisi aliquam vel rhoncus.
Pellentesque malesuada pretium dignissim posuere sed enim blandit morbi adipiscing. Enim sed viverra scelerisque risus eget in semper. Sit ac nunc ipsum vitae volutpat posuere ultrices aliquet. Massa nisi fringilla scelerisque vitae. Tortor ultricies interdum neque aliquet. Tortor porttitor auctor neque enim facilisis dolor tristique tempor sodales. Donec diam convallis massa dictum lacinia sed et. Facilisis malesuada faucibus faucibus ut.
Dignissim aenean eu vel eu. Feugiat et sem duis urna. Fermentum nibh leo scelerisque nullam. Felis mattis ac mi nisl. In quisque sollicitudin ultrices ullamcorper senectus egestas nibh dictum est. Lacus vitae lectus eu massa posuere. Lacus euismod imperdiet posuere neque consectetur sapien. Vitae lacus a accumsan quam ipsum. A pulvinar ridiculus sed sit aliquam senectus. Tellus eu volutpat tellus morbi sem sed tortor gravida. Diam aliquam odio orci dolor. Dolor quis consequat in id faucibus at amet. Lectus semper nisl condimentum pharetra. Mattis odio lorem semper vulputate. Neque est laoreet quam imperdiet.
Ipsum ornare dolor non vivamus vitae ac. Urna nec at orci auctor cursus tellus sit et. Aliquam nulla sodales ultrices eget. Amet sed pretium lacus convallis fringilla non volutpat habitant. Eu commodo orci placerat eleifend. Pellentesque duis mauris vitae varius hendrerit euismod in. Proin scelerisque aliquam aliquam imperdiet scelerisque erat scelerisque nibh. Scelerisque morbi arcu rhoncus massa. Scelerisque aenean amet porta tempus risus purus integer pretium. Elementum amet auctor lorem mauris tellus arcu. Ipsum augue elit ac massa. Sem est et viverra vestibulum risus fermentum aliquet vitae. Nisi non a non integer.
Fermentum ac dictum laoreet phasellus sem. Augue molestie eleifend lorem diam nibh porttitor mauris. Vitae viverra mi in tincidunt malesuada morbi nisl pretium ac. Risus augue consequat enim ultrices sed. Arcu pellentesque mattis morbi turpis placerat dolor. Sed ultricies egestas vitae sagittis vitae. Non mi laoreet faucibus pellentesque non neque cursus iaculis. Nec felis justo euismod augue orci sed ullamcorper in. Leo gravida quis quisque felis orci mi duis. Ipsum ac vivamus commodo viverra. Vel augue sollicitudin gravida scelerisque. A pellentesque turpis et adipiscing sagittis. Quisque nibh dui turpis vitae turpis. Nullam augue aliquam nunc nisl ultrices scelerisque maecenas aliquet.
Sit ornare maecenas volutpat adipiscing urna eget nunc interdum. Ac dolor quis bibendum risus viverra amet. Facilisis gravida nisl maecenas quis non risus adipiscing quis risus. Enim id eu duis morbi sapien. Vulputate ut accumsan tellus ipsum sit nisl sapien sit. Et arcu non aliquet ridiculus rhoncus massa massa neque. In in nunc aliquam in leo ultrices dolor ut. Sit arcu eget integer est nulla ut turpis mi vel. Vitae diam urna lacus eu sit in sit vel lorem. Molestie lobortis quis elit risus pellentesque purus. Risus proin volutpat fermentum nisl etiam accumsan massa. Sed consequat parturient interdum cras odio rhoncus viverra duis nisi. Massa aenean nisl eget consectetur.
Faucibus non ut sodales vitae enim consequat. Dictumst semper nibh pellentesque feugiat integer quis elementum malesuada. Tortor iaculis felis porttitor dui neque accumsan dignissim. Bibendum mi vitae velit varius. Elit nulla faucibus morbi interdum odio. Enim porttitor pellentesque lectus ac rhoncus rhoncus. Ornare diam cursus facilisis lectus non in magna semper. Diam a congue pharetra convallis pellentesque in morbi. Cursus in in arcu commodo. Enim faucibus est eget neque. Suspendisse euismod non amet maecenas gravida. Amet nisl convallis aenean accumsan libero adipiscing nunc.
Elementum arcu mi est sed id. Ut quis velit arcu consectetur cras faucibus. Pretium at tristique pretium massa aliquet facilisi eget id ipsum. Vulputate a sem sit donec pretium fames quam in. Turpis malesuada pulvinar scelerisque purus adipiscing consectetur non. Vestibulum sed diam porttitor nisl scelerisque. Integer mattis libero lacus leo dolor tristique. Sem et ut lectus venenatis diam aliquet et et. Porttitor in gravida sodales faucibus vulputate tincidunt.
Dolor sed sapien sed eget posuere. Laoreet dui neque dolor donec eleifend diam. Gravida quisque orci proin elementum ut convallis volutpat malesuada. Commodo elementum commodo aliquam in ipsum in diam quis auctor. Justo aenean integer tincidunt pellentesque natoque. Malesuada ac fusce tellus eleifend parturient at quis augue. Commodo enim donec sapien tortor velit egestas nec posuere blandit.
Maecenas aenean laoreet molestie in est tellus. Scelerisque est proin quam diam lorem sed nisi sem. Ut sit porta urna tristique a turpis ultrices. Leo duis quis nec sed et scelerisque. In morbi scelerisque nullam at dignissim volutpat. Risus mattis nibh volutpat fringilla volutpat sapien enim. In vitae imperdiet massa ut ultricies ut ultricies. Mi nulla vitae donec id nisl sed convallis. Lobortis eu proin ipsum vulputate lacus. Congue viverra venenatis nec vivamus eu donec mauris. Id facilisis auctor eu consectetur a malesuada. Mollis at pulvinar integer et arcu nec. Donec amet netus suscipit egestas cras vitae nulla molestie. Consectetur nibh ornare aliquam justo id convallis.
Tincidunt at diam non quis nisi vitae. Nisl ac turpis non sit. Imperdiet ac augue volutpat elementum vel fringilla pellentesque nec. Sed mus eget enim pellentesque ultricies lacus congue. Vel amet rhoncus facilisis ullamcorper scelerisque sit risus. Interdum senectus dui nunc nullam amet felis amet interdum risus. Sem amet mi feugiat quisque lacus. Elit pretium nisi at turpis etiam scelerisque sit justo. Nunc eu potenti lorem quam. Venenatis tellus facilisis lorem arcu blandit sed.</p>
          </div>
        </section>
      </div>
    </AuthGuard>
  );
};

export default Learn;
