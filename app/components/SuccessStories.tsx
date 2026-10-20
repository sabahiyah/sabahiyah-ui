const testimonials = [
  {
    quote:
      "Al-Sabahiyah helped me secure a professional driving position in Dubai. The process was clear, and I’m now able to support my family back in Rwanda.",
    name: "Jean Pierre N.",
    role: "Logistics Driver, UAE",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80",
  },
  {
    quote:
      "I was nervous about working abroad, but the pre-departure training was excellent. I feel safe and respected in my hospitality role.",
    name: "Marie Grace U.",
    role: "Hotel Associate, Qatar",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80",
  },
];

const communityAvatars = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=64&h=64&q=80",
];

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-5 text-[#0a6668]/25"
    >
      <path d="M7.2 5.5A5.7 5.7 0 0 0 2 11.3v.2c0 3.1 2 5 4.6 5 2.1 0 3.7-1.5 3.7-3.6 0-1.9-1.3-3.2-3.1-3.2-.5 0-.9.1-1.3.3.3-1.7 1.5-2.8 3.3-3.4l-.7-1.8c-.4.2-.9.4-1.3.7Zm11 0a5.7 5.7 0 0 0-5.2 5.8v.2c0 3.1 2 5 4.6 5 2.1 0 3.7-1.5 3.7-3.6 0-1.9-1.3-3.2-3.1-3.2-.5 0-.9.1-1.3.3.3-1.7 1.5-2.8 3.3-3.4l-.7-1.8c-.4.2-.9.4-1.3.7Z" />
    </svg>
  );
}

export default function SuccessStories() {
  return (
    <section
      id="success-stories"
      aria-labelledby="success-stories-heading"
      className="flex min-h-[448px] items-center bg-[#eaecee] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:gap-16">
        <div data-reveal>
          <h2
            id="success-stories-heading"
            className="font-serif text-2xl font-medium tracking-tight text-slate-800 sm:text-3xl"
          >
            Success Stories
          </h2>
          <p className="mt-4 max-w-sm text-xs leading-5 text-slate-600">
            Hear from Rwandan professionals who have successfully transformed
            their lives through our recruitment program.
          </p>

          <div className="mt-6 flex items-center">
            <div className="flex -space-x-2">
              {communityAvatars.map((avatar, index) => (
                <span
                  key={avatar}
                  role="img"
                  aria-label={`Community member ${index + 1}`}
                  className="size-8 rounded-full border-2 border-[#eaecee] bg-cover bg-center"
                  style={{ backgroundImage: `url('${avatar}')` }}
                />
              ))}
            </div>
            <span className="ml-3 text-[10px] font-medium text-slate-500">
              +500 Successful Candidates
            </span>
          </div>
        </div>

        <div data-reveal-group className="grid gap-4 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              data-reveal="item"
              className="flex min-h-52 flex-col justify-between rounded-md border border-slate-200 bg-white p-5 shadow-sm transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-lg motion-reduce:transform-none sm:p-6"
            >
              <div>
                <QuoteIcon />
                <blockquote className="mt-3 text-xs italic leading-5 text-slate-700">
                  “{testimonial.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  role="img"
                  aria-label={testimonial.name}
                  className="size-9 shrink-0 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${testimonial.avatar}')` }}
                />
                <span>
                  <span className="block text-[11px] font-semibold text-slate-800">
                    {testimonial.name}
                  </span>
                  <span className="mt-0.5 block text-[10px] text-slate-500">
                    {testimonial.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
