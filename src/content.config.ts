import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const proyectos = defineCollection({  
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }), 
    schema: z.object({
        titulo: z.string(),
        enlaces: z.object({
            texto: z.array(z.string().url()).nullable(),
            iconos: z.array(z.string().url()).nullable(),
        }),
        descripcion: z.string(),
        img: z.string().url(),
        imgs: z.array(z.string().url()).nullable(),
        tecnologias: z.object({
            texto: z.array(z.string()).nullable(),
            iconos: z.array(z.string().url()).nullable(),
        }),
    })
})

export const collections = proyectos;