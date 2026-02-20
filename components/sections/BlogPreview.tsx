import Container from "@/components/layout/Container";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Tipps für den erfolgreichen Hausverkauf ohne Makler",
    excerpt: "Erfahren Sie, wie Sie Ihre Immobilie schnell und zum besten Preis verkaufen – ohne hohe Maklergebühren.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    date: "15. Feb 2026",
    category: "Verkauf",
    link: "/blog/5-tipps-hausverkauf-ohne-makler",
  },
  {
    id: 2,
    title: "Wie viel ist meine Immobilie wert?",
    excerpt: "Die richtige Preisfindung ist entscheidend für einen erfolgreichen Verkauf. Wir zeigen Ihnen, worauf es ankommt.",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
    date: "10. Feb 2026",
    category: "Bewertung",
    link: "/blog/immobilienwert-ermitteln",
  },
  {
    id: 3,
    title: "Die 7 häufigsten Fehler beim Immobilienverkauf",
    excerpt: "Von falscher Preisfindung bis schlechten Fotos: Diese Fehler kosten Sie Geld und Zeit. So machen Sie es besser.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
    date: "5. Feb 2026",
    category: "Tipps",
    link: "/blog/fehler-immobilienverkauf",
  },
  {
    id: 4,
    title: "Immobilie als Kapitalanlage: Was Sie wissen müssen",
    excerpt: "Investieren in Immobilien kann sehr lukrativ sein. Erfahren Sie, worauf Sie achten sollten und wie Sie die beste Rendite erzielen.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=600&fit=crop",
    date: "1. Feb 2026",
    category: "Investment",
    link: "/blog/immobilie-kapitalanlage",
  },
];

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <a
      href={post.link}
      className="group backdrop-blur-2xl bg-white/30 rounded-3xl overflow-hidden hover:scale-105 hover:brightness-110 transition-all duration-300 block"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Date Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-accent-400 text-white px-4 py-2 rounded-full text-sm font-medium">
          <Calendar className="w-4 h-4" />
          {post.date}
        </div>
        {/* Category Badge */}
        <div className="absolute top-4 right-4 backdrop-blur-xl bg-white/40 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-accent-500 transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-5 line-clamp-3 text-sm">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-2 text-accent-500 font-medium group-hover:gap-3 transition-all duration-200 text-sm">
          Weiterlesen <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </a>
  );
}

export default function BlogPreview() {
  return (
    <section
      className="py-16 md:py-24 bg-beige-50"
      data-parallax="slow"
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
            Aktuelle Artikel
          </h2>
          <p className="text-base text-gray-600">
            Tipps und Insights zum Immobilienverkauf
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Link to full blog */}
        <div className="text-center mt-10">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:gap-3 transition-all duration-200"
          >
            Alle Artikel ansehen <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
