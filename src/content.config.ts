import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const proyectos = defineCollection({  
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }), 
  schema: z.object({
    titulo: z.string(),
    enlaces: z.object({
      texto: z.array(z.string()).optional(),
      link: z.array(z.string().url()).optional(),
      iconos: z.array(z.string()).optional(),
    }).optional(),
    descripcion: z.string(),
    img: z.string(),
    imgs: z.array(z.string()).optional(),
    tecnologias: z.object({
      texto: z.array(z.string()).optional(),
      iconos: z.array(z.string()).optional(),
    }).optional(),
    orden: z.number().optional(),
  })
})

export const collections = {
  'projects': proyectos
};