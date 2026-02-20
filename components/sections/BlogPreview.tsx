import Container from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Tipps für den erfolgreichen Hausverkauf ohne Makler",
    excerpt: "Erfahren Sie, wie Sie Ihre Immobilie schnell und zum besten Preis verkaufen – ohne hohe Maklergebühren.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    link: "/blog/5-tipps-hausverkauf-ohne-makler",
  },
  {
    id: 2,
    title: "Wie viel ist meine Immobilie wert?",
    excerpt: "Die richtige Preisfindung ist entscheidend für einen erfolgreichen Verkauf. Wir zeigen Ihnen, worauf es ankommt.",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
    link: "/blog/immobilienwert-ermitteln",
  },
  {
    id: 3,
    title: "Die 7 häufigsten Fehler beim Immobilienverkauf",
    excerpt: "Von falscher Preisfindung bis schlechten Fotos: Diese Fehler kosten Sie Geld und Zeit. So machen Sie es besser.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
    link: "/blog/fehler-immobilienverkauf",
  },
];

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <a
      href={post.link}
      className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 transition-all duration-300 block"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 group-hover:text-accent-500 transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-2 text-accent-500 font-medium group-hover:gap-3 transition-all duration-200">
          Weiterlesen <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </a>
  );
}

export default function BlogPreview() {
  return (
    <section className="py-24 md:py-32 bg-primary-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">
            Aktuelle Artikel
          </h2>
          <p className="text-lg text-gray-600">
            Tipps und Insights zum Immobilienverkauf
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Optional: Link to full blog */}
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-accent-500 font-semibold text-lg hover:gap-3 transition-all duration-200"
          >
            Alle Artikel ansehen <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
