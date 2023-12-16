import React, { useState } from "react";

export default function Hero() {
  const testimonials = [
    {
      source: "/wura.jpg",
      quote:
        "Je suis devenu plus conscient de la façon dont je dépense mon argent et aussi de mes investissements. Désormais, je me sens à l’aise de dépenser en sachant que mon compte Epargne est là.",
      name: "wuwu",
      href: "/",
      username: "@wuwu",
      background: "rgb(255,236,219)",
    },
    {
      source: "/wande.jpg",
      quote:
        "Je suis devenu plus conscient de la façon dont je dépense mon argent et aussi de mes investissements. Désormais, je me sens à l’aise de dépenser en sachant que mon compte Epargne est là.",
      name: "Donne D",
      href: "/",
      username: "@donnevi",
      background: "rgb(255,236,219)",
    },
    {
      source: "/mayokun.jpg",
      quote:
        "Je suis devenu plus conscient de la façon dont je dépense mon argent et aussi de mes investissements. Désormais, je me sens à l’aise de dépenser en sachant que mon compte Epargne est là.",
      name: "Adjovi L",
      href: "/",
      username: "@adjoa",
      background: "rgb(255,236,219)",
    },
  ];

  const handleTestimonailActivity = (i: React.SetStateAction<number>) =>
    setActiveThumbnailImage(i);

  const getImage = (i: number) => {
    return testimonials[i].source;
  };

  const getQuote = (i: number) => testimonials[i].quote;

  const getName = (i: number) => testimonials[i].name;

  const getUsername = (i: number) => testimonials[i].username;

  const getHref = (i: number) => testimonials[i].href;

  return (
    <section>
      <div className="max-w-[1380px] w-full mx-auto mt-9 mb-0 px-5 py-0">
        <div className="grid grid-cols-[1fr_1fr] gap-20 grid-flow-dense px-0 py-20 max-[980px]:grid-cols-[1fr] max-[980px]:gap-[30px] max-[980px]:pt-[30px]">
          <div className="min-h-[650px] relative opacity-100 transition-opacity duration-[0.7s] ease-[ease] ml-[30px] mt-[30px] max-[980px]:min-h-[450px] max-[980px]:ml-0 max-[980px]:mt-4">
            <div className="overflow-x-hidden bg-[#f5f6fa]">
              <div className="absolute opacity-0 invisible h-full w-full left-0 top-0 TEStimoNIALISacTIVE">
                <div
                  className={`absolute top-[-60px] w-[400px] opacity-10  bg-[#2F80ED] -left-20 h-[850px] max-[980px]:w-[300px] max-[980px]-left-10 max-[980px]-top-5`}
                ></div>

                <div className="bg-white min-h-[180px] w-[340px] absolute  z-[5] px-8 py-6 -right-2.5 -bottom-10 max-[980px]:left-5 max-[400px]:w-[280px] max-[1024px]:mb-6">
                  <blockquote className="text-[.9rem] text-[#6c82a3] leading-[1.35] tracking-[-0.2px] m-0 break-words">
                    The personalized career recommendations helped me focus on
                    what truly matters. I found a path that aligns with my
                    passion, and now I'm pursuing my dream career. Thank you for
                    guiding me
                  </blockquote>
                  <div className="flex justify-between font-medium text-[1.4rem] mt-6">
                    <span className="text-sm">Wuraola F</span>
                    <a target="_blank" className="text-[#0066f5] text-sm">
                      @wuwu
                    </a>
                  </div>
                </div>

                <div className="h-[650px] w-[520px] overflow-hidden relative max-[980px]:w-full max-[980px]:h-full">
                  <img
                    src={"/wura.jpg"}
                    alt={"wura"}
                    className={`h-full w-full object-cover z-[1] absolute left-0 top-0 translate-x-0 translate-y-0 `}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-[980px]:mt-4 max-[980px]:row-[1]">
            <h1 className="mb-5 text-[5rem] tracking-[-7.5px] leading-[1.1] font-semibold max-[400px]:tracking-[-.5px] max-[980px]:text-[4.2rem] max-[980px]:tracking-[-2px]">
              Discover Your Path to Success.
            </h1>
            <h6 className="text-[2rem] font-normal tracking-[-1.5px] mt-4 max-[980px]:text-[2rem] max-[980px]:tracking-[-0.9px]">
              Tailored recommendations for your unique journey. Explore careers,
              discover universities, and set the course for success.
            </h6>

            <form
              method="GET"
              action="/signup"
              className="mx-0 my-[30px] flex max-w-[80%] max-[600px]:hidden"
            >
              <input
                type="email"
                required
                name="email"
                placeholder="Your email..."
                className="flex-1 border mr-2.5 border-solid border-[rgba(8,37,82,0.11)] AUTHinPUT"
              />

              <button
                type="submit"
                className="button_auth lowercase max-[600px]:w-full"
              >
                Forge your future
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}