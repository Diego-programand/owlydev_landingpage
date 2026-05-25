"use client";

import Image from "next/image";
import { m as motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Service {
  title: string;
  desc: string;
  img: string;
  href: string;
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative h-full w-full overflow-hidden">
      {/* Imagen de fondo con Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={service.img}
          alt={`${service.title} - Soluciones Digitales OwlyDev`}
          fill
          priority
          className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        />
        {/* Overlay gradiente para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 pb-32 md:p-20 md:pb-40">
        <div className="max-w-4xl">
          {/* Badge o Categoría (Opcional) */}
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-[#23ADCF]"
          >
            Servicio Especializado
          </motion.span>

          {/* Título: Siempre visible pero con animación de entrada */}
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl font-bold text-white md:text-6xl lg:text-7xl"
          >
            {service.title}
          </motion.h3>

          {/* Descripción: 
              En Desktop: Oculta, aparece al hacer hover en el contenedor.
              En Mobile: Siempre visible.
          */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 overflow-hidden"
          >
            <p className="max-w-2xl text-lg leading-relaxed text-white/80 transition-all duration-500 md:translate-y-10 md:text-xl md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
              {service.desc}
            </p>

            <div className="mt-8 transition-all duration-500 md:translate-y-10 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
              <Link
                href={service.href}
                className="inline-flex items-center gap-3 rounded-full bg-[#23ADCF] px-8 py-4 font-bold text-white transition-transform hover:scale-105 active:scale-95"
              >
                Explorar Solución
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}