import { z } from "zod";

const create = z.object({
  logo: z.string().url({ message: "Logo must be a valid URL" }),
  primaryBannerImg: z.array(
    z.string().url({ message: "Each primary banner image must be a valid URL" })
  ),
  secondaryBannerImg: z.array(
    z
      .string()
      .url({ message: "Each secondary banner image must be a valid URL" })
  ),
  whatsappStatus: z.boolean(),
  topButton: z.object({
    text: z.string().min(1, { message: "Top button text is required" }),
    link: z.string().url({ message: "Top button link must be a valid URL" }),
    color: z.string().min(1, { message: "Top button color is required" }),
  }),
  background: z
    .object({
      type: z.enum(["image", "color"]),
      image: z
        .string()
        .url({ message: "Background image must be a valid URL" })
        .optional(),
      color: z.string().optional(),
    })
    .refine(
      (data) => {
        if (data.type === "image") {
          return !!data.image;
        }
        if (data.type === "color") {
          return !!data.color;
        }
        return true;
      },
      {
        message:
          "Image is required when type is 'image' and color is required when type is 'color'",
        path: ["background"],
      }
    ),
});

const update = z.object({
    logo: z.string().url({ message: "Logo must be a valid URL" }).optional(),
    primaryBannerImg: z
      .array(
        z
          .string()
          .url({ message: "Each primary banner image must be a valid URL" })
      )
      .optional(),
    secondaryBannerImg: z
      .array(
        z
          .string()
          .url({ message: "Each secondary banner image must be a valid URL" })
      )
      .optional(),
    whatsappStatus: z.boolean().optional(),
    topButton: z
      .object({
        text: z
          .string()
          .min(1, { message: "Top button text is required" })
          .optional(),
        link: z
          .string()
          .url({ message: "Top button link must be a valid URL" })
          .optional(),
        color: z
          .string()
          .min(1, { message: "Top button color is required" })
          .optional(),
      })
      .optional(),
    background: z
      .object({
        type: z.enum(["image", "color"]).optional(),
        image: z
          .string()
          .url({ message: "Background image must be a valid URL" })
          .optional(),
        color: z.string().optional(),
      })
      .refine(
        (data) => {
          if (data.type === "image") {
            return !!data.image;
          }
          if (data.type === "color") {
            return !!data.color;
          }
          return true;
        },
        {
          message:
            "Image is required when type is 'image' and color is required when type is 'color'",
          path: ["background"],
        }
      )
      .optional(),
  })
  .partial();

const frontViewValidationSchema = {
  create,
  update,
};
export default frontViewValidationSchema;
