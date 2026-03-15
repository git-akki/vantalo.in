import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { createBreadcrumbSchema } from "@/lib/schemas";
import ProjectDetailContent from "./ProjectDetailContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} - ${project.category} Case Study`,
    description: project.description,
    alternates: { canonical: `https://vantalo.in/work/${project.slug}` },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: "https://vantalo.in" },
    { name: "Our Work", url: "https://vantalo.in/work" },
    { name: project.title, url: `https://vantalo.in/work/${project.slug}` },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProjectDetailContent slug={slug} />
    </>
  );
}
