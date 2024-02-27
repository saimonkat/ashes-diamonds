import React, { useEffect, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import gsap from "gsap/dist/gsap";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

//style
import style from "./journey.module.scss";

//shared
import ava from "../../../../shared/images/lovedones/journey/ava.jpg";
import Process from "@features/lovedones/journey/process-button/ProcessButton";
import ImageWrapper from "@components/common/ImageWrapper";
import Schedule from "@features/home/want/button-schedule/Schedule";
import Started from "@features/home/want/button-started/Started";

const Journey = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = (elem: any) => {
    const scrollLeft = elem.target.scrollLeft;
    if (scrollLeft) setIsScrolled(true);
  };

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const trigger = triggerRef.current;

    let translateX = -(7 * 522);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const width = sectionRef.current.offsetWidth;

    if (width < 768) {
      setIsMobile(true);
      return;
    }

    if (width < 486) {
      translateX = -(9 * 522);
    } else if (width < 948) {
      translateX = -(8 * 522);
    }

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: translateX,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className={style.journey}>
      <div className={style.background}></div>
      <div className="container">
        <div className={style.header}>
          <h2 className={style.title}>A grief-changing journey</h2>
          <p className={style.description}>
            We want to be a source of brightness for those coping with the death
            of a loved one. Through a collaborative and surprisingly uplifting
            process, we help families and friends honor the bright moments of a
            life. Meanwhile, the ashes of their loved one are evolving into a
            Diamond that they'll be able to hold close.
          </p>
        </div>
      </div>

      <div
        className={`${style.content} ${isMobile && style.contentMobile}`}
        ref={triggerRef}
        onScroll={handleScroll.bind(this)}
      >
        <div className={style.progressBar}></div>
        <div className={style.sectionsWrapper} ref={sectionRef} id="panels">
          {/* 1 */}
          <div
            className={`${style.section} ${style.sectionFirst} ${
              isScrolled && style.scrolled
            }`}
          >
            <div className={style.sectionHeader}>
              <h3 className={style.sectionNumber}>1</h3>
              <div className={style.sectionTextContainer}>
                <h3 className={style.sectionTitle}>
                  You receive your
                  <br /> Welcome Kit
                </h3>
                <p className={style.sectionDescription}>
                  The kit includes a video, instructions, return postage, and
                  the needed tools for you to send us your loved one's ashes.
                </p>
              </div>
            </div>
            <div className={style.sectionPost}>
              <div className={style.postAvatar}>
                <ImageWrapper src={ava} alt="avatar" />
              </div>
              <div className={style.postComment}>
                <p>
                  Here's your loved one's itinerary. 😊 Every month we'll share
                  pictures, videos, & updates. So honored to be on this journey
                  with you! 💛 💎
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h3 className={style.sectionNumber}>2</h3>
              <div className={style.sectionTextContainer}>
                <h3 className={style.sectionTitle}>
                  A remarkable
                  <br /> transformation
                </h3>
                <p className={style.sectionDescription}>
                  We isolate the carbon from ashes, which is the starting
                  material for their Diamond!
                </p>
              </div>
            </div>
            <div className={style.sectionPost}>
              <div className={style.postAvatar}>
                <ImageWrapper
                  src={ava}
                  alt="avatar"
                  className={style.postAvatarImage}
                />
              </div>
              <div className={style.postComment}>
                <p>
                  Stage one success! Your loved one's ashes have been
                  successfully purified into beautiful, sparkly carbon. Check
                  out the process ahead. 🎥
                </p>
                <div className={style.button}>
                  <Process />
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h3 className={style.sectionNumber}>3</h3>
              <div className={style.sectionTextContainer}>
                <h3 className={style.sectionTitle}>A Diamond emerges</h3>
                <p className={style.sectionDescription}>
                  Through a custom, individualized process of heat and pressure,
                  your loved one's raw Diamond will grow.
                </p>
              </div>
            </div>
            <div className={style.sectionPost}>
              <div className={style.postAvatar}>
                <ImageWrapper
                  src={ava}
                  alt="avatar"
                  className={style.postAvatarImage}
                />
              </div>
              <div className={style.postComment}>
                <p>
                  I have amazing news...your loved one is officially a raw
                  Diamond! Here's a video from the growth - they did
                  wonderfully. 🙌
                </p>
                <div className={style.button}>
                  <Process />
                </div>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h3 className={style.sectionNumber}>4</h3>
              <div className={style.sectionTextContainer}>
                <h3 className={style.sectionTitle}>
                  Cut, polished, set by
                  <br /> masters
                </h3>
                <p className={style.sectionDescription}>
                  Your Diamond is cut in Antwerp, graded and engraved, colored*
                  and set in personalized jewelry*. Next, we’ll get ready for
                  the homecoming! (* optional)
                </p>
              </div>
            </div>
            <div className={style.sectionPost}>
              <div className={style.postAvatar}>
                <ImageWrapper
                  src={ava}
                  alt="avatar"
                  className={style.postAvatarImage}
                />
              </div>
              <div className={style.postComment}>
                <p>
                  Hey there. They just finished at the cutters. Gosh, they
                  turned out stunning. 😍
                </p>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h3 className={style.sectionNumber}>5</h3>
              <div className={style.sectionTextContainer}>
                <h3 className={style.sectionTitle}>
                  An unforgettable
                  <br /> homecoming
                </h3>
                <p className={style.sectionDescription}>
                  The return of your loved one’s Diamond is a special day, so we
                  make sure every Diamond is carefully and thoughtfully
                  delivered.
                </p>
              </div>
            </div>
            <div className={style.sectionPost}>
              <div className={style.postAvatar}>
                <ImageWrapper
                  src={ava}
                  alt="avatar"
                  className={style.postAvatarImage}
                />
              </div>
              <div className={style.postComment}>
                <p>
                  The day is finally here - we're ready to deliver them home.
                  Take lots of pics, this is a day you'll remember for a
                  lifetime. 💛
                </p>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className={style.section}>
            <div className={style.lastCards}>
              <h3>
                Want to
                <br />
                <span> learn more?</span>
              </h3>
              <p>
                Schedule a no pressure consultation to learn more about the
                process & ask questions. We look forward to hearing about your
                loved one.
              </p>
              <Schedule />
            </div>
          </div>
          {/* 7 */}
          <div className={style.section}>
            <div className={style.lastCards}>
              <h3>Ready to get started?</h3>
              <p>
                Schedule a no pressure consultation to learn more about the
                process & ask questions. We look forward to hearing about your
                loved one.
              </p>
              <Started />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
