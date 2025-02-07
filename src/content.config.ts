import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({   
    schema: z.object({
        titulo: z.string(),
        enlaces: z.object({
            texto: z.array(z.string().url()).nullable(),
            iconos: z.array(z.string().url()).nullable(),
        }),
        descripcion: z.string(),
        img: z.string().url(),
        tecnologias: z.object({
            texto: z.array(z.string()).nullable(),
            iconos: z.array(z.string().url()).nullable(),
        }),
    })
})

export const collections = proyectos;