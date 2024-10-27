"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue } from "framer-motion";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Loader from "../Loader";

export const ImageSwiper = ({ images, className }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [IsLoading, setIsLoading] = useState(true);

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -10 && imgIndex < images.length - 1) {
      setImgIndex((e) => e + 1);
    } else if (x >= 10 && imgIndex > 0) {
      setImgIndex((e) => e - 1);
    }
  };
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {IsLoading ? (
        <Loader Message={"Loading Images..."} />
      ) : (
        <div
          className={cn(
            "group/hover relative h-full w-full overflow-hidden rounded-lg",
            className
          )}
        >
          <div className="pointer-events-none absolute top-1/2 z-10 flex w-full -translate-y-1/2 justify-between px-5 ">
            <button
              style={imgIndex === 0 ? { opacity: 0 } : {}}
              className="pointer-events-auto h-fit w-fit rounded-full bg-white/80 p-2 opacity-0 transition-all group-hover/hover:opacity-100"
              onClick={() => {
                if (imgIndex > 0) {
                  setImgIndex((pv) => pv - 1);
                }
              }}
              name="Image_Swiper_handler_Left"
            >
              <IconChevronLeft className="stroke-neutral-600" size={20} />
            </button>
            <button
              style={imgIndex === images.length - 1 ? { opacity: 0 } : {}}
              className="pointer-events-auto h-fit w-fit rounded-full bg-white/80 p-2  opacity-0 transition-all group-hover/hover:opacity-100"
              onClick={() => {
                if (imgIndex < images.length - 1) {
                  setImgIndex((pv) => pv + 1);
                }
              }}
              name="Image_Swiper_handler_Right"
            >
              <IconChevronRight className="stroke-neutral-600" size={20} />
            </button>
          </div>
          <div className="pointer-events-none absolute bottom-2 z-10 flex w-full items-center justify-center">
            <div className="flex w-9 items-center justify-center rounded-md bg-black/80 p-0.5 text-xs text-white opacity-0 transition-all group-hover/hover:opacity-100">
              <div>
                {imgIndex + 1}/{images.length}
              </div>
            </div>
          </div>
          <motion.div
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragMomentum={false}
            style={{
              x: dragX,
            }}
            animate={{
              translateX: `-${imgIndex * 100}%`,
            }}
            onDragEnd={onDragEnd}
            transition={{
              damping: 18,
              stiffness: 90,
              type: "spring",
              duration: 0.2,
            }}
            className=" flex h-full cursor-grab items-center rounded-[inherit] active:cursor-grabbing"
          >
            {images.map((src, i) => {
              return (
                <motion.div
                  key={i}
                  className="h-full w-full shrink-0 overflow-hidden bg-transparent object-cover first:rounded-l-[inherit] last:rounded-r-[inherit]"
                >
                  <img
                    src={src}
                    className="pointer-events-none h-full w-full object-cover"
                    loading="lazy"
                    alt="Apps Screenshots"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      )}
    </>
  );
};
