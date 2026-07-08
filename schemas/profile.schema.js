import * as z from "zod";


const profileSchema = z.object({
    name: z.string(),
    profession: z.string(),
    skills: z.array(z.string()),
    experience: z.string()
});

export default profileSchema;