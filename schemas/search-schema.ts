// import { z } from "zod";

// export const searchSchema = z.object({
//   title: z.string().min(1, "Title is required"),
//   source: z.string().min(1, "Source is required"),
//   // from: z.string().optional(),
//   // to: z.string().optional(),
//   dateRange: z
//     .object({
//       from: z.date().optional(),
//       to: z.date().optional(),
//     })
//     .optional(),
// });

// export type SearchProps = z.infer<typeof searchSchema>;

import { z } from "zod";

export const searchSchema = z.object({
  title: z.string().min(1, "Title is required"),
  source: z.string().min(1, "Source is required"),
  from: z.string().optional(),
  to: z.string().optional(),
});

export type SearchProps = z.infer<typeof searchSchema>;
