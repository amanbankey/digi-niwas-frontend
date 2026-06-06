

import React, { useEffect, useRef, useState } from "react";
import niwas from "../../assets/images/niwas.png";
import dashboard from "../../assets/images/dashboard.png";
import property from "../../assets/images/property.png";
import backImg from "../../assets/images/back.png";

const FRONT_IMAGES = ['https://res.cloudinary.com/dhuabv2it/image/upload/v1780736766/niwas_jzpp87.png', 
  'https://res.cloudinary.com/dhuabv2it/image/upload/v1780736761/dashboard_t6ocdx.png',
   'https://res.cloudinary.com/dhuabv2it/image/upload/v1780736767/property_apkuj7.png',
   'https://res.cloudinary.com/dhuabv2it/image/upload/v1780736761/dashboard_t6ocdx.png',
 'https://res.cloudinary.com/dhuabv2it/image/upload/v1780736767/property_apkuj7.png'];
const N = FRONT_IMAGES.length;
const RADIUS = window.innerWidth < 640 ? 150 : 200;
const SPEED = 0.5;

export default function IphoneSection() {
  const angleRef = useRef(0);
  const targetRef = useRef(0);
  const rafRef = useRef(null);
  const slotsRef = useRef([]);
  const shellsRef = useRef([]);
  const autoRef = useRef(true);
  const dragRef = useRef(null);
  const [flipped, setFlipped] = useState(Array(N).fill(false));

  useEffect(() => {
    const tick = () => {
      if (autoRef.current) targetRef.current -= SPEED;
      angleRef.current =  targetRef.current

      slotsRef.current.forEach((slot, i) => {
        if (!slot) return;
        const baseAngle = (360 / N) * i;
        const a = ((angleRef.current + baseAngle) % 360) * (Math.PI / 180);
        const x = Math.sin(a) * RADIUS;
        const z = Math.cos(a) * RADIUS;
        const scale = 0.62 + 0.4 * ((z / RADIUS + 1) / 2);
        const zIdx = Math.round((z / RADIUS + 1) * 5);
        const deg = -(angleRef.current + baseAngle);

        slot.style.transform = `translateX(${x}px)`;
        slot.style.zIndex = zIdx;
        slot.style.opacity =  "1"

        const shell = shellsRef.current[i];
        if (shell) {
          const flipDeg = flipped[i] ? 180 : 0;
          shell.style.transform = `rotateY(${
            flipDeg + deg
          }deg) scale(${scale})`;
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [flipped]);



  return (
    <div
      className=" w-full lg:min-h-screen  flex items-center justify-center overflow-hidden"
      style={{ background: "#274255" }}
    >

      <div className="relative flex items-center justify-center 
       w-[clamp(300px,80vw,700px)] h-[clamp(400px,65vw,480px)]"

      >
        <div className="absolute  flex items-center justify-center w-full h-full"> 
        {FRONT_IMAGES.map((img, i) => (
          <div className=""
            key={i}
            ref={(el) => (slotsRef.current[i] = el)}
            style={{
              position: "absolute",
              width: "clamp(130px, 20vw, 200px)",
              height: "clamp(268px, 41vw, 412px)",
              cursor: "pointer",
            }}
          >
            <div className="shadow-none "
              ref={(el) => (shellsRef.current[i] = el)}
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                transformStyle: "preserve-3d",
                transition: "none",
                borderRadius: "clamp(28px,4.5vw,42px)",
                background:
                  "linear-gradient(160deg,#2e2e30 0%,#1c1c1e 40%,#111112 100%)",
                border: "1.5px solid #3a3a3c",
               
              }}
            >
              <SideButtons />
              <FrontFace img={img} />
              <BackFace backImg={'https://res.cloudinary.com/dhuabv2it/image/upload/v1780736761/back_ootwl7.png'} />
            </div>
          </div>
        ))} </div>
      </div>
    </div>
  );
}

function SideButtons() {
  const base = { position: "absolute", background: "#2c2c2e", borderRadius: 2 };
  return (
    <>
      <div style={{ ...base, right: -3, top: 88, width: 3, height: 52 }} />
      <div style={{ ...base, left: -3, top: 74, width: 3, height: 26 }} />
      <div style={{ ...base, left: -3, top: 107, width: 3, height: 26 }} />
      <div style={{ ...base, left: -3, top: 55, width: 3, height: 16 }} />
    </>
  );
}

function FrontFace({ img }) {
  const r = "clamp(22px,3.5vw,36px)";
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        borderRadius: "inherit",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "clamp(4px,0.6vw,6px)",
          borderRadius: "clamp(23px,3.7vw,37px)",
          overflow: "hidden",
          background: "#000",
        }}
      >
        <img
          src={img}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.35) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "clamp(7px,1vw,11px)",
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(60px,9.5vw,92px)",
            height: "clamp(18px,2.8vw,26px)",
            background: "#000",
            borderRadius: 20,
            zIndex: 5,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "clamp(6px,0.9vw,9px)",
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(48px,7.5vw,72px)",
            height: "clamp(3px,0.4vw,4px)",
            background: "rgba(255,255,255,0.28)",
            borderRadius: 3,
            zIndex: 5,
          }}
        />
      </div>
    </div>
  );
}

function BackFace({ backImg }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
        borderRadius: "inherit",
        overflow: "hidden",
      }}
    >
      <img
        src={backImg}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}
