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
import tutor1 from '../../../public/tutor1.png'

import Image from "next/image";

const testimonials = [
  {
    content: "Levo meu cachorro no petshop toda semana e o atendimento é sempre impecável. Equipe muito carinhosa e atenciosa!",
    author: "Carla Menezes",
    role: "Tutora do Thor",
    image: tutor1
  },
  {
    content: "Adoro o serviço de leva e traz! Super pontuais e meu gato sempre volta bem cuidado.",
    author: "Rafael Souza",
    role: "Tutor do Mingau",
    image: tutor1
  },
  {
    content: "A consulta veterinária foi excelente. A veterinária explicou tudo com muita paciência e profissionalismo.",
    author: "Luciana Torres",
    role: "Tutora da Mel",
    image: tutor1
  },
  {
    content: "O banho e tosa deixou meu pet lindo! Além disso, percebo que ele fica super tranquilo com a equipe.",
    author: "Fábio Lima",
    role: "Tutor do Bolinha",
    image: tutor1
  }
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-[#FFD449] py-16 ">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-4xl font-bold text-center mb-12">Depoimentos dos nossos clientes</h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 px-3"
                  >
                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">

                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="relative w-24 h-24">
                          <Image 
                            src={item.image}
                            alt={item.author}
                            fill
                            sizes="96px"
                            className="object-cover rounded-full"
                          />
                        </div>

                        <p className="text-gray-200">
                          {item.content}
                        </p>
                        <div>
                          <p className="font-bold">
                          {item.author}
                        </p>
                        <p className="text-sm text-gray-400">
                          {item.role}
                        </p>
                        </div>

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
