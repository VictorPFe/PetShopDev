"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Dog,
  IdCardLanyard,
  Clock,
} from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    title: "Banho e Tosa",
    description:
      "Higiene completa com produtos específicos para cada tipo de pelagem.",
    duration: "1h",
    price: "R$ 80,00",
    icon: <Scissors />,
    linkText: "Agendar agora",
  },
  {
    title: "Consulta Veterinária",
    description:
      "Avaliação completa com nossos veterinários para garantir a saúde do seu pet.",
    duration: "30min",
    price: "R$ 120,00",
    icon: <IdCardLanyard />,
    linkText: "Marcar consulta",
  },
  {
    title: "Vacinação",
    description:
      "Vacinas essenciais para manter seu pet protegido contra doenças.",
    duration: "20min",
    price: "R$ 90,00",
    icon: <Syringe />,
    linkText: "Ver calendário de vacinas",
  },
  {
    title: "Adestramento",
    description: "Sessões individuais de adestramento com reforço positivo.",
    duration: "1h",
    price: "R$ 150,00",
    icon: <Dog />,
    linkText: "Agendar sessão",
  },
  {
    title: "Táxi Pet",
    description:
      "Serviço de leva e traz com segurança e conforto para seu pet.",
    duration: "Sob consulta",
    price: "R$ 30,00",
    icon: <CarTaxiFront />,
    linkText: "Solicitar transporte",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16 ">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-4xl font-bold mb-12">Serviços</h2>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                  >
                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                      <div className="flex-1 flex items-start justify-between">
                        <div className="flex gap-3">
                          <span className="text-3xl">{item.icon}</span>
                          <div className="select-none">
                            <h3 className="font-bold text-xl my-1">
                              {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{item.duration}</span>
                        </div>

                        <a
                          target="_blank"
                          href={`https://wa.me/5571999999999?text=Olá vim pelo site e gostaria de mais infomações sobre *${item.title}*`}
                          className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md"
                        >
                          <WhatsappLogoIcon className="w-5 h-5" />
                          Entrar em contato
                        </a>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              onClick={scrollNext}
              className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
