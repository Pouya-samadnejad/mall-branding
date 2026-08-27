import { Counter } from "./Counter";
import { Spotlight } from "./ui/spotlight-new";

export default function CounterSection() {
  return (
    <div className="relative my-10 overflow-hidden border-y border-primary py-10 md:my-20 md:py-20">
      <Spotlight />
      <div className="relative z-10 grid grid-cols-2 gap-6 px-4 md:flex md:items-center md:justify-center md:gap-5 md:divide-x md:divide-stone-700">
        <Counter
          numberClassName="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          suffix="%"
          title="رضایت مشتری"
          value={97}
        />
        <Counter
          numberClassName="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          suffix="+"
          title="مرکز خرید"
          value={40}
        />
        <Counter
          numberClassName="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          suffix="+"
          title="پروژه های اجرا شده"
          value={150}
        />
        <Counter
          numberClassName="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          suffix=""
          title="سال تجربه"
          value={12}
        />
      </div>
    </div>
  );
}
