import { z } from "zod";

export const SocialLinkSchema = z.object({
  name: z.string(),
  url: z.url(),
  iconName: z.enum(["github", "linkedin", "twitter", "default"]),
});

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  description: z.string(),
  link: z.url(),
  active: z.boolean().default(true),
  company: z.string().optional(),
  companyLogoUrl: z.string().optional(),
  tech: z.array(z.string()).default([]),
  isSideProject: z.boolean().default(false), 
});

export const ExperienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  role: z.string(),
  date: z.string(),
  link: z.url().optional(),
  description: z.string().optional(),
});

export const ProfileSchema = z.object({
  name: z.string(),
  nickname: z.string(),
  title: z.string(),
  about: z.string(),
  description: z.string(),
  location: z.string(),
  role: z.string(),
  resumeUrl: z.string(),
  avatarUrl: z.string(),
});

export const PortfolioDataSchema = z
  .object({
    profile: ProfileSchema,
    socials: z.array(SocialLinkSchema),
    projects: z.array(ProjectSchema),
    experiences: z.array(ExperienceSchema),
  })
  .readonly();

export type Project = z.infer<typeof ProjectSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type PortfolioData = z.infer<typeof PortfolioDataSchema>;
export type Profile = z.infer<typeof ProfileSchema>;
