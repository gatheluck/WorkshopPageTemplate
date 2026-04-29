import {
  Calendar,
  Mail,
  MapPin,
  ExternalLink,
  FileText,
  Info,
} from "lucide-react";
import { SiSlack } from "react-icons/si";
import { Link, useLocation } from "react-router";
import { useEffect } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import workshopData from "../../data/workshop.json";
import peopleData from "../../data/people.json";
import type { Route } from "./+types/Home";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { buildMeta } from "@/lib/seo";

export const meta: Route.MetaFunction = () =>
  buildMeta({
    title:
      "BigMAC Workshop @ CVPR 2026 | Big Model Adaptation for Computer Vision",
    description:
      "BigMAC Workshop at CVPR 2026 spotlights big model adaptation for computer vision. Join us on June 2026 in Denver for keynotes, paper presentations, and community updates.",
    path: "/",
    keywords: ["cvpr workshop 2026", "big model adaptation", "computer vision"],
  });

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const element = document.querySelector(location.hash);
    element?.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <main className="container px-6 py-8 space-y-16 xl:w-6xl">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border px-6 py-16 text-center shadow-lg">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <img
            src="/bigmac-cover.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent dark:from-primary/30" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
            <span>held as part of</span>
            <div className="flex flex-wrap items-center justify-center gap-4 rounded-full border bg-background/90 px-6 py-3 shadow-sm backdrop-blur">
              {/* <div className="flex items-center gap-3 -mx-2">
                <img
                  src="/limit-logo-black-wide.png"
                  alt="LIMIT Workshop logo"
                  className="h-14 dark:hidden"
                />
                <img
                  src="/limit-logo-white-wide.png"
                  alt="LIMIT Workshop logo"
                  className="hidden h-14 dark:block"
                />
              </div>
              <span className="text-sm tracking-normal text-muted-foreground">
                at
              </span> */}
              <div className="flex items-center gap-3 pl-4 pr-4">
                <img
                  src="/cvpr-logo-black.png"
                  alt="CVPR 2026 logo"
                  className="h-10 dark:hidden"
                />
                <img
                  src="/cvpr-logo-white.png"
                  alt="CVPR 2026 logo"
                  className="hidden h-10 dark:block"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl xl:whitespace-nowrap">
              {workshopData.home.title}
            </h1>
            <p className="text-2xl tracking-tight sm:text-3xl md:text-4xl">
              {workshopData.home.tagline}
            </p>
            <p className="text-lg text-muted-foreground">{workshopData.home.subtitle}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>{workshopData.home.eventInfo.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{workshopData.home.eventInfo.location}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button variant="outline" size="lg" asChild>
              <Link to="/#program">Check Program</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Info + Latest News Section */}
      <div className="space-y-6 -mt-8">
        {/* Info Section */}
        <div className="flex items-start gap-4 rounded-lg border bg-card p-6">
          <Info className="h-6 w-6 shrink-0 text-primary" />
          <p className="font-medium">
            This workshop does NOT have a call for papers. Instead, we will hold
            an invited poster session. If you would like to nominate your paper
            for a poster presentation at our workshop, please add it{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdei0hTZJ8bA6gAUtcpY6UiJW05wwVl7e507RLSyGi2jHnOtA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              here
            </a>
            .
          </p>
        </div>

        {/* Latest News Section */}
        <section id="news" className="space-y-6 mt-16">
          <div className="space-y-2">
            <h2 className="text-3xl tracking-tighter">Latest News</h2>
          </div>
          <div className="space-y-4">
            {workshopData.home.latestNews.map((news, index) => (
              <div key={index} className="rounded-lg border bg-card p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="font-semibold">{news.title}</h3>
                    <p className="text-sm text-muted-foreground">{news.date}</p>
                  </div>
                </div>
                <p className="mt-2">{news.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Overview Section */}
      <section id="about" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl tracking-tighter">About BigMAC Workshop</h2>
          <p>
            This workshop explores how large pretrained models are
            revolutionizing computer vision. We examine emerging techniques
            where models like Stable Diffusion enable image-to-3D
            reconstruction, architectures like VGG Transformer (VGGT) leverage
            pretrained DINO for enhanced visual understanding, and methods like
            REA harness pretrained models for improved diffusion generation. The
            workshop covers four key areas: emerging uses of pretrained vision
            models for 3D and generative AI, prompting techniques for vision
            models, the role of vision models in multimodal LLMs, and
            post-pretraining adaptation strategies. BigMAC brings together
            researchers to address the challenges and opportunities in
            effectively adapting foundation models for diverse downstream vision
            tasks.
          </p>
        </div>
        {/* Broader impact */}
        <div className="space-y-2">
          <h3 className="text-2xl tracking-tighter">Broader impact</h3>
          <p>
            The goal of this workshop is to explore and discuss ways of
            effectively adapting and utilizing large pretrained models in
            computer vision. The sheer parameter and training dataset sizes mean
            that these foundation models often cannot be trained from scratch by
            academia, yet they offer unprecedented opportunities for downstream
            adaptation. These developments bring both challenges and novel
            opportunities - from leveraging pretrained diffusion models for 3D
            reconstruction to incorporating vision encoders into multimodal
            systems. Rather than viewing model scale as a barrier, we focus on
            innovative usage and adaptation techniques and post-pretraining
            strategies that make these powerful models accessible and useful for
            diverse applications. In this workshop, we aim to bring together
            researchers from academia and industry to discuss how the vision
            community can best harness these pretrained foundations for
            advancing computer vision research and applications.
          </p>
        </div>
        {/* Topics of Interest */}
        <div className="space-y-2">
          <h3 className="text-2xl tracking-tighter">Topics of Interest</h3>
          <p>The workshop focus on following topics:</p>
          <div className="space-y-2">
            <ul className="list-disc pl-5 space-y-1">
              {workshopData.callForPapers.topics.core.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl tracking-tighter">
            Workshop Program
          </h2>
        </div>
        <div className="flex items-start gap-4 rounded-lg border bg-card p-6">
          <Info className="h-6 w-6 shrink-0 text-primary" />
          <p>
            The following workshop program describes the tentative schedule in
            the case that the workshop is held in the morning. Please note that
            the program may change depending on the assigned time slot. Please
            check back for updates.
          </p>
        </div>
        <ScrollArea className="w-[80dvw] md:w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Time</TableHead>
                <TableHead>Session</TableHead>
                <TableHead className="hidden md:table-cell">
                  Presenter
                </TableHead>
                <TableHead className="hidden md:table-cell w-[140px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workshopData.schedule.workshopProgram.day1.schedule.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.time}</TableCell>
                  <TableCell>{item.session}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.presenter || ""}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.slides ? (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={item.slides} target="_blank" rel="noreferrer">
                          <FileText className="mr-2 h-4 w-4" />
                          Slides
                        </a>
                      </Button>
                    ) : (
                      <span className="text-muted-foreground text-sm"></span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Invited Speakers Section */}
      <section id="speakers" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl tracking-tighter">
            Invited Speakers
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {peopleData.program.invitedSpeakers.map((speaker, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{speaker.name}</CardTitle>
                <CardDescription>{speaker.affiliation}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                    <img
                      src={speaker.photo}
                      alt={`Photo of ${speaker.name}`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  {/* <h3 className="font-semibold">{speaker.title}</h3>
                  <p className="text-sm text-muted-foreground">{speaker.bio}</p> */}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-2"
                  asChild
                >
                  <a href={speaker.website} target="_blank" rel="noreferrer">
                    View Profile <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Organizers */}
      <section id="organizers" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl tracking-tighter">Organizers</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {peopleData.organizers.organizers.map((chair, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{chair.name}</CardTitle>
                <CardDescription>{chair.affiliation}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                    <img
                      src={chair.photo}
                      alt={`Photo of ${chair.name}`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-2"
                  asChild
                >
                  <a href={chair.website} target="_blank" rel="noreferrer">
                    Website <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl tracking-tighter">
            Contact Information
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workshopData.contact.contactInfo.map((info, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {info.icon === "Mail" && <Mail className="h-5 w-5" />}
                  {info.icon === "MapPin" && <MapPin className="h-5 w-5" />}
                  {info.icon === "SiSlack" && <SiSlack className="h-5 w-5" />}
                  {info.type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {info.description}
                </p>
                {info.value && (
                  <p className="font-medium mt-2">
                    {info.type === "Email" ? (
                      <a
                        href={`mailto:${info.value}`}
                        className="hover:text-primary"
                      >
                        {info.value}
                      </a>
                    ) : (
                      info.value.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < info.value.split("\n").length - 1 && <br />}
                        </span>
                      ))
                    )}
                  </p>
                )}
                {info.socialLinks && (
                  <div className="flex gap-4 mt-2">
                    {info.socialLinks.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant="outline"
                        size="sm"
                        className="flex gap-2"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noreferrer">
                          {link.icon === "SiSlack" && (
                            <SiSlack className="h-4 w-4" />
                          )}
                          {link.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
