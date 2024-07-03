import { cn } from "@/app/lib/cn";
import Marquee from "@/app/components/ui/marquee";
import { TbShoppingCartStar } from "react-icons/tb";

const reviews = [
  {
    name: "Maciel",
    username: "@maciel",
    body: "Simplesmente incrível, melhor conta que já comprei na vida!",
    img: "https://cdn.discordapp.com/avatars/975870828782694521/3e72991762552f66777c0428fcf3f0c4.png?size=2048",
  },
  {
    name: "Nathan",
    username: "@nathanborg",
    body: "Paguei um preço muito acessível e comprei com segurança.",
    img: "https://cdn.discordapp.com/avatars/975870828782694521/3e72991762552f66777c0428fcf3f0c4.png?size=2048",
  },
  {
    name: "Fabrício A.",
    username: "@fabricioaquilles",
    body: "Paguei um preço muito acessível e comprei com segurança.",
    img: "https://cdn.discordapp.com/avatars/438865800053522433/c44b065d488b4f1640104befaf6ff2bd.png?size=2048",
  },
  {
    name: "Holyx",
    username: "@hlxdev",
    body: "Simplesmente incrível, melhor conta que já comprei na vida!",
    img: "https://cdn.discordapp.com/avatars/975870828782694521/3e72991762552f66777c0428fcf3f0c4.png?size=2048",
  },
  {
    name: "Augusto",
    username: "@AugustoPacheca",
    body: "Paguei um preço muito acessível e comprei com segurança.",
    img: "https://cdn.discordapp.com/avatars/438865800053522433/c44b065d488b4f1640104befaf6ff2bd.png?size=2048",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",

        "border-[#333] bg-[#101010] text-white hover:bg-17 transition duration-300 hover:scale-105"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white font-dmsans">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-red-500 font-dmsans">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm font-dmsans font-normal text-[#fff9]">
        {body}
      </blockquote>
    </figure>
  );
};

export default function Reviews() {
  return (
    <>
      <section className="flex flex-col bg-black py-12">
        <div className="flex flex-col justify-center mx-auto group relative px-6">
          <h1 className="mt-4 mb-4 text-4xl md:text-5xl lg:text-6xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto z-50">
            Confiança Comprovada{" "}
            <TbShoppingCartStar className="text-[#ff495f] group-hover:-translate-y-2 duration-300 transition z-50" />{" "}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto bg-gradient-to-r from-[#9e1223] to-[#ff495f] text-transparent bg-clip-text z-50">
            Sucesso Garantido.
          </h1>
          <p className="mb-8 mt-4 text-center text-md font-dmsans text-[#fff9] font-normal max-w-xl mx-auto ">
           Todos e qualquer cliente que efetuarem <span className="text-red-500">alguma compra</span> em nossa loja, estará <span className="text-red-500">totalmente satisfeito</span> e seguro.
          </p>
        </div>
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r  from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l  from-black"></div>
        </div>
      </section>
    </>
  );
}
