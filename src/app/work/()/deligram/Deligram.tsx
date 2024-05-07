import Endorsement from '@/components/endorsements/Endorsement'
import HeroSecond from '@/components/hero-second/HeroSecond'
import Pilpil from '@/components/pilpil/Pilpil'
import c from 'classnames'
import s from './Deligram.module.sass'
import Button from '@/components/button/Button'

function Brand() {
  return (
    <>
      <div className={s.Endorsement1}>
        <Endorsement load="jituboss" />
      </div>

      <div className={s.Brand}>
        <div className={s.Brand__container}>
          <HeroSecond
            title="Making something out of nothing"
            subtitle="Logo, typeface and colors"
            copy={[
              'Building brand identity, expression and tone is not that easy for a startup. We need someone’s hand to help here. Maverick Studios comes here to help us. We work together several months and the outcome is awesome.',
            ]}
          />

          <div className={s.LogoBlock}>
            <div className={s.LogoBlock__row}>
              <div className={s.LogoBlock__col}>
                <Pilpil
                  className={s.image}
                  width={692}
                  height={218}
                  small="/work/deligram/logoblock/sm-logo-light.jpg"
                  large="/work/deligram/logoblock/logo-light@2x.jpg"
                  alt="logo"
                />
                <Pilpil
                  className={s.image}
                  width={692}
                  height={250}
                  small="/work/deligram/logoblock/sm-logo-light.jpg"
                  large="/work/deligram/logoblock/logo-light-com@2x.jpg"
                  alt="logo"
                />
                <Pilpil
                  className={c(s.image, s.half)}
                  width={348}
                  height={197}
                  small="/work/deligram/logoblock/sm-logo-light-dg.jpg"
                  large="/work/deligram/logoblock/logo-light-dg@2x.jpg"
                  alt="logo"
                />
              </div>
              <div className={s.LogoBlock__col}>
                <Pilpil
                  className={s.image}
                  width={692}
                  height={218}
                  small="/work/deligram/logoblock/sm-logo-dark.jpg"
                  large="/work/deligram/logoblock/logo-dark@2x.jpg"
                  alt="logo"
                />
                <Pilpil
                  className={s.image}
                  width={692}
                  height={250}
                  small="/work/deligram/logoblock/sm-logo-dark.jpg"
                  large="/work/deligram/logoblock/logo-dark-com@2x.jpg"
                  alt="logo"
                />
                <Pilpil
                  className={c(s.image, s.half)}
                  width={348}
                  height={197}
                  small="/work/deligram/logoblock/sm-logo-dark-dg.jpg"
                  large="/work/deligram/logoblock/logo-dark-dg@2x.jpg"
                  alt="logo"
                />
              </div>
              <div className={s.LogoBlock__col}>
                <Pilpil
                  className={s.image}
                  width={692}
                  height={218}
                  small="/work/deligram/logoblock/sm-logo-color.jpg"
                  large="/work/deligram/logoblock/logo-color@2x.jpg"
                  alt="logo"
                />
                <Pilpil
                  className={s.image}
                  width={692}
                  height={250}
                  small="/work/deligram/logoblock/sm-logo-color.jpg"
                  large="/work/deligram/logoblock/logo-color-com@2x.jpg"
                  alt="logo"
                />
                <Pilpil
                  className={c(s.image, s.half)}
                  width={348}
                  height={197}
                  small="/work/deligram/logoblock/sm-logo-color-dg.jpg"
                  large="/work/deligram/logoblock/logo-color-dg@2x.jpg"
                  alt="logo"
                />
              </div>
            </div>
          </div>

          <div className={s.LogoVideo}>
            <div className={s.LogoVideo__wrapper}>
              <video
                className={c(s.AutoplayVideo, s.v1x)}
                src="/work/deligram/logoblock/logo-animation.mp4"
                autoPlay
                loop
                controls
              />
              <video
                className={c(s.AutoplayVideo, s.v2x)}
                src="/work/deligram/logoblock/logo-animation@2x.mp4"
                autoPlay
                loop
                controls
              />
            </div>
          </div>

          <div className={s.Pallette}>
            <div className={s.Pallette__inner}>
              <div className={s.Pallette__colLeft}>
                <div
                  className={c(s.Pallette__color, s.color783392)}
                  data-color="#783392"
                ></div>
                <div
                  className={c(s.Pallette__color, s.colorFCBF14)}
                  data-color="#FCBF14"
                ></div>
                <p className={s.Pallette__caption}>Primary colors</p>
              </div>
              <div className={s.Pallette__colRight}>
                <div
                  className={c(s.Pallette__colorsm, s.colorEE395F)}
                  data-color="#EE395F"
                ></div>
                <div
                  className={c(s.Pallette__colorsm, s.color41B468)}
                  data-color="#41B468"
                ></div>
                <div
                  className={c(s.Pallette__colorsm, s.color74CDDA)}
                  data-color="#74CDDA"
                ></div>
                <div
                  className={c(s.Pallette__colorsm, s.color1A1718)}
                  data-color="#1A1718"
                ></div>
                <div
                  className={c(s.Pallette__colorsm, s.color515963)}
                  data-color="#515963"
                ></div>
                <div
                  className={c(s.Pallette__colorsm, s.colorCDD0D2)}
                  data-color="#CDD0D2"
                ></div>
                <p className={s.Pallette__caption}>Secondary colors</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={s.LetsStart}>
        <div className={s.LetsStart__heading}>
          <div className={s.LetsStart__container}>
            <div className={s.LetsStart__heading}>
              <div className={s.LetsStart__container}>
                <h2 className={s.LetsStart__title}>Let’s start from scratch</h2>
                <h3 className={s.LetsStart__subtitle}>
                  Think local, scratch global
                </h3>
                <p className={s.LetsStart__copy}>
                  Pens stuck, brains freeze, eyes wide open. We’ve invested
                  countless nights and hundreds of hours breaking down the
                  problems into small pieces. Then finally one by one,
                  everything started to make sense.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={s.LetsStart__imageContain}>
          <div className={s.LetsStart__container}>
            <div className={s.LetsStart__row}>
              <div className={s.LetsStart__imageBlockWrapper}>
                <div className={s.LetsStart__imageBlock}>
                  <Pilpil
                    className={s.image}
                    width={1290}
                    height={1720}
                    small="/work/deligram/letsstart/sm-image1.jpg"
                    large="/work/deligram/letsstart/image1.jpg"
                    alt="Scratch"
                  />
                </div>
                <div className={s.LetsStart__imageBlock}>
                  <Pilpil
                    className={s.image}
                    width={1290}
                    height={1720}
                    small="/work/deligram/letsstart/sm-image2.jpg"
                    large="/work/deligram/letsstart/image2.jpg"
                    alt="Meeting"
                  />
                </div>
                <div className={s.LetsStart__imageBlock}>
                  <Pilpil
                    className={s.image}
                    width={1290}
                    height={964}
                    small="/work/deligram/letsstart/sm-image3.jpg"
                    large="/work/deligram/letsstart/image3.jpg"
                    alt="Workspace"
                  />
                </div>
                <div className={s.LetsStart__imageBlock}>
                  <Pilpil
                    className={s.image}
                    width={1290}
                    height={964}
                    small="/work/deligram/letsstart/sm-image4.jpg"
                    large="/work/deligram/letsstart/image4.jpg"
                    alt="Scrum meeting"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Endorsement load="shafiq" />

      <Pilpil
        className={s.DevTeam}
        width={1920}
        height={800}
        small="/work/deligram/sm-team-deligram.jpg"
        large="/work/deligram/team-deligram.jpg"
        alt="deligram team"
      />

      <div className={s.Affix}>
        <div className={s.Affix__container}>
          <div className={s.Affix__inner}>
            <div className={s.Affix__content}>
              <h2 className={s.Affix__title}>Home sweet home</h2>
              <h3 className={s.Affix__subtitle}>A new website</h3>
              <p className={s.Affix__copy}>
                People care less about the brilliant internal strategies but
                more about the end result. Conveying the outcome was the goal
                which we accomplished amazingly.
              </p>
            </div>
            <div className={s.Affix__sideImage}>
              <Pilpil
                className={s.home}
                width={550}
                height={2862}
                small="/work/deligram/home/sm-home.jpg"
                large="/work/deligram/home/home.jpg"
                alt="Home"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={s.DeligramIcon}>
        <div className={s.DeligramIcon__container}>
          <div className={s.DeligramIcon__heading}>
            <h2 className={s.DeligramIcon__title}>Enjoy my house blend</h2>
            <h3 className={s.DeligramIcon__subtitle}>A set of custom icons</h3>
            <p className={s.DeligramIcon__copy}>
              I supplemented the Deligram brand with clear, friendly and easy to
              understand iconography.
            </p>
          </div>

          <div className={s.DeligramIcon__row}>
            <div className={s.DeligramIcon__imageContain}>
              <div className={s.DeligramIcon__item}>
                <div className={s.DeligramIcon__imageBlock}>
                  <Pilpil
                    className={s.DevTeam}
                    width={410}
                    height={536}
                    small="/work/deligram/iconset/sm-iconset-1.jpg"
                    large="/work/deligram/iconset/iconset-1.jpg"
                    alt="Icons utilities"
                    caption="Utilities"
                  />
                </div>
              </div>
              <div className={s.DeligramIcon__item}>
                <div className={s.DeligramIcon__imageBlock}>
                  <Pilpil
                    className={s.DevTeam}
                    width={410}
                    height={536}
                    small="/work/deligram/iconset/sm-iconset-2.jpg"
                    large="/work/deligram/iconset/iconset-2.jpg"
                    alt="Icons categories"
                    caption="Categories"
                  />
                </div>
              </div>
              <div className={s.DeligramIcon__item}>
                <div className={s.DeligramIcon__imageBlock}>
                  <Pilpil
                    className={s.DevTeam}
                    width={410}
                    height={536}
                    small="/work/deligram/iconset/sm-iconset-3.jpg"
                    large="/work/deligram/iconset/iconset-3.jpg"
                    alt="Icons hyper local"
                    caption="Featured hyper local"
                  />
                </div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Endorsement load="tareq" />

      <div className={s.Show}>
        <div className={s.Show__container}>
          <div className={s.Show__heading}>
            <div className={s.Show__content}>
              <h2 className={s.Show__title}>Pick a card, any card</h2>
              <h3 className={s.Show__subtitle}>Card-based product thumbnail</h3>
              <p className={s.Show__copy}>
                I designed a flexible system of cards. The thumbnails were
                designed in a way that lets users know the maximum details about
                their products.
              </p>
            </div>
          </div>
          <div className={s.Show__row}>
            <div className={s.Show__colLeft}>
              <div className={s.Show__item}>
                <div className={s.Show__imageWrapper}>
                  <div className={s.Show__videoAspectRatio}>
                    <video
                      className={s.Show__video}
                      src="/work/deligram/pick/video1.mp4"
                      autoPlay
                      loop
                      controls
                    />
                  </div>
                </div>
                <p className={s.Show__caption}>
                  Home screen with bottom navigation and horizontal swipeable
                  user interface.
                </p>
              </div>
              <div className={s.Show__item}>
                <div className={s.Show__imageWrapper}>
                  <div className={s.Show__videoAspectRatio}>
                    <video
                      className={s.Show__video}
                      src="/work/deligram/pick/video2.mp4"
                      autoPlay
                      loop
                      controls
                    />
                  </div>
                </div>
                <p className={s.Show__caption}>
                  A product details page designed to pass full information of a
                  product and you can share anytime.
                </p>
              </div>
            </div>
            <div className={s.Show__colRight}>
              <div className={s.Show__item}>
                <div className={s.Show__imageWrapper}>
                  <div className={s.Show__videoAspectRatio}>
                    <video
                      className={s.Show__video}
                      src="/work/deligram/pick/video3.mp4"
                      autoPlay
                      loop
                      controls
                    />
                  </div>
                </div>
                <p className={s.Show__caption}>
                  Women’s fashion category page. Minimal header at the top of
                  the screen, app navigation at top right side.
                </p>
              </div>
              <div className={s.Show__item}>
                <div className={s.Show__imageWrapper}>
                  <div className={s.Show__videoAspectRatio}>
                    <video
                      className={s.Show__video}
                      src="/work/deligram/pick/video4.mp4"
                      autoPlay
                      loop
                      controls
                    />
                  </div>
                </div>
                <p className={s.Show__caption}>
                  I experimented with two actions at bottom to create an easy
                  buying experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Endorsement load="adnan" />

      <div className={c(s.Show, s.reverse)}>
        <div className={s.Show__container}>
          <div className={s.Show__heading}>
            <div className={s.Show__content}>
              <h2 className={s.Show__title}>No Distraction, on your mind</h2>
              <h3 className={s.Show__subtitle}>
                Building a better checkout flow
              </h3>
              <p className={s.Show__copy}>
                For a successful ecommerce site, the shopping cart is arguably
                the most essential piece of the puzzle. I designed a “shopping
                bag” that doesn’t get in the way while you’re shopping but
                slides out from the left only at the moment when you need it.
              </p>
            </div>
          </div>
          <div className={s.Show__row}>
            <div className={s.Show__colLeft}>
              <div className={s.Show__item}>
                <div className={s.Show__imageWrapper}>
                  <div className={s.Show__videoAspectRatio}>
                    <video
                      className={s.Show__video}
                      src="/work/deligram/checkout/video1.mp4"
                      autoPlay
                      loop
                      controls
                    />
                  </div>
                </div>
                <p className={s.Show__caption}>
                  Did you khow that most people click <strong>Buy now</strong>{' '}
                  button instead <strong>Add to cart</strong>
                </p>
              </div>
              <div className={s.Show__item}>
                <div className={s.Show__imageWrapper}>
                  <div className={s.Show__videoAspectRatio}>
                    <video
                      className={s.Show__video}
                      src="/work/deligram/checkout/video2.mp4"
                      autoPlay
                      loop
                      controls
                    />
                  </div>
                </div>
                <p className={s.Show__caption}>Confirm state</p>
              </div>
            </div>
            <div className={s.Show__colRight}>
              <div className={s.Show__item}>
                <div className={s.Show__imageWrapper}>
                  <div className={s.Show__videoAspectRatio}>
                    <video
                      className={s.Show__video}
                      src="/work/deligram/checkout/video3.mp4"
                      autoPlay
                      loop
                      controls
                    />
                  </div>
                </div>
                <p className={s.Show__caption}>
                  One way cart flow, so that user feel no distraction while
                  buying product.
                </p>
              </div>
              <div className={s.Show__item}>
                <div className={s.Show__imageWrapper}>
                  <div className={s.Show__videoAspectRatio}>
                    <video
                      className={s.Show__video}
                      src="/work/deligram/checkout/video4.mp4"
                      autoPlay
                      loop
                      controls
                    />
                  </div>
                </div>
                <p className={s.Show__caption}>Easy payment options</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Endorsement load="shipu" />

      <div className={s.FeelIt}>
        <div className={s.FeelIt__container}>
          <div className={s.FeelIt__heading}>
            <h2 className={s.FeelIt__title}>You can feel it</h2>
            <h3 className={s.FeelIt__subtitle}>Deligram in the wild</h3>
            <p className={s.FeelIt__copy}>
              In a sea of ecommerce platforms where the focus is more often on
              functionality than good looks, Deligram stands out as a
              beautifully crafted designed object and spreads good vibes. Our
              photos set out to capture that.
            </p>
          </div>

          <div className={s.FeelIt__rowOne}>
            <div className={s.FeelIt__col1}>
              <div className={s.FeelIt__imageBlock1}>
                <Pilpil
                  className={s.image}
                  width={1776}
                  height={1220}
                  small="/work/deligram/feelit/sm-image1.jpg"
                  large="/work/deligram/feelit/image1.jpg"
                  alt="Image 1"
                />
              </div>
            </div>

            <div className={s.FeelIt__col2}>
              <div className={s.FeelIt__imageBlock2}>
                <Pilpil
                  className={s.image}
                  width={644}
                  height={860}
                  small="/work/deligram/feelit/sm-image2.jpg"
                  large="/work/deligram/feelit/image2.jpg"
                  alt="Image 2"
                />
              </div>
            </div>
          </div>

          <div className={s.FeelIt__rowTwo}>
            <div className={s.FeelIt__colLeft}>
              <div className={s.FeelIt__imageBlock3}>
                <Pilpil
                  className={s.image}
                  width={810}
                  height={698}
                  small="/work/deligram/feelit/sm-image3.jpg"
                  large="/work/deligram/feelit/image3.jpg"
                  alt="Image 3"
                />
              </div>
              <div className={s.FeelIt__imageBlock4}>
                <Pilpil
                  className={s.image}
                  width={1230}
                  height={824}
                  small="/work/deligram/feelit/sm-image4.jpg"
                  large="/work/deligram/feelit/image4.jpg"
                  alt="Image 4"
                />
              </div>
            </div>
            <div className={s.FeelIt__colRight}>
              <div className={s.FeelIt__imageBlock5}>
                <Pilpil
                  className={s.image}
                  width={1290}
                  height={788}
                  small="/work/deligram/feelit/sm-image5.jpg"
                  large="/work/deligram/feelit/image5.jpg"
                  alt="Image 5"
                />
              </div>
              <div className={s.FeelIt__imageBlock6}>
                <Pilpil
                  className={s.image}
                  width={724}
                  height={528}
                  small="/work/deligram/feelit/sm-image6.jpg"
                  large="/work/deligram/feelit/image6.jpg"
                  alt="Image 6"
                />
              </div>
            </div>
          </div>

          <div className={s.FeelIt__rowThree}>
            <div className={s.FeelIt__col7}>
              <div className={s.FeelIt__imageBlock7}>
                <Pilpil
                  className={s.image}
                  width={2100}
                  height={884}
                  small="/work/deligram/feelit/sm-image7.jpg"
                  large="/work/deligram/feelit/image7.jpg"
                  alt="Image 7"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={s.ItsWorking}>
        <div className={s.ItsWorking__container}>
          <div className={s.ItsWorking__heading}>
            <h2 className={s.ItsWorking__title}>It’s working</h2>
            <h3 className={s.ItsWorking__subtitle}>
              They write about Deligram
            </h3>
            <p className={s.ItsWorking__copy}>
              The fruit of hard labor is always the sweetest. You know you did a
              good job when the big boys start talking about it.
            </p>
          </div>

          <div className={s.ItsWorking__row}>
            <blockquote className={s.ItsWorking__col}>
              <Pilpil
                className={s.ItsWorking__newsImage}
                width={169}
                height={44}
                small="/work/deligram/itsworking/sm-techcrunch.jpg"
                large="/work/deligram/itsworking/techcrunch.jpg"
                alt="Tech Crunch"
              />
              <p className={s.ItsWorking__news}>
                A young entrepreneur is building the Amazon of Bangladesh.
                Blending online and offline commerce, Deligram is one of a
                number of emerging startups in the country.
              </p>
              <footer className={s.ItsWorking__footer}>
                <cite className={s.ItsWorking__cite}>
                  <Button
                    className={s.ItsWorking__name}
                    to="https://techcrunch.com/2019/05/21/deligram/"
                  >
                    Read article
                  </Button>
                </cite>
              </footer>
            </blockquote>
            <blockquote className={s.ItsWorking__col}>
              <Pilpil
                className={s.ItsWorking__newsImage}
                width={105}
                height={44}
                small="/work/deligram/itsworking/sm-futurestartup.jpg"
                large="/work/deligram/itsworking/futurestartup.jpg"
                alt="Future Startup"
              />
              <p className={s.ItsWorking__news}>
                Founded in 2017, Deligram started as a pilot in Comilla. It
                partnered with 40 retail stores with an ambition to figure out a
                new model for ecommerce distribution by leveraging…
              </p>
              <footer className={s.ItsWorking__footer}>
                <cite className={s.ItsWorking__cite}>
                  <Button
                    className={s.ItsWorking__name}
                    to="https://futurestartup.com/2019/06/28/waiz-rahim-on-deligram/"
                  >
                    Read article
                  </Button>
                </cite>
              </footer>
            </blockquote>
            <blockquote className={s.ItsWorking__col}>
              <Pilpil
                className={s.ItsWorking__newsImage}
                width={171}
                height={44}
                small="/work/deligram/itsworking/sm-thedailystar.jpg"
                large="/work/deligram/itsworking/thedailystar.jpg"
                alt="The Daily Star"
              />
              <p className={s.ItsWorking__news}>
                Shopping is set to become even more convenient with the arrival
                of Deligram, an omni-channel e-commerce company that promises to
                harness existing corner shops in neighbourhoods…
              </p>
              <footer className={s.ItsWorking__footer}>
                <cite className={s.ItsWorking__cite}>
                  <Button
                    className={s.ItsWorking__name}
                    to="https://www.thedailystar.net/business/news/novel-e-commerce-store-deligram-goes-live-1721842https://www.thedailystar.net/business/news/novel-e-commerce-store-deligram-goes-live-1721842"
                  >
                    Read article
                  </Button>
                </cite>
              </footer>
            </blockquote>
            <blockquote className={s.ItsWorking__col}>
              <Pilpil
                className={s.ItsWorking__newsImage}
                width={112}
                height={44}
                small="/work/deligram/itsworking/sm-medium.jpg"
                large="/work/deligram/itsworking/medium.jpg"
                alt="Medium"
              />
              <p className={s.ItsWorking__news}>
                Customers can order from the Deligram mobile app or website &
                have their desired products delivered to their homes within
                24–96 hours.
              </p>
              <footer className={s.ItsWorking__footer}>
                <cite className={s.ItsWorking__cite}>
                  <Button
                    className={s.ItsWorking__name}
                    to="https://medium.com/deligram/deligram-raises-2-5m-to-supercharge-mudir-dokans-into-ecommerce-hubs-dd020d0530a6"
                  >
                    Read article
                  </Button>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  )
}

export default Brand
