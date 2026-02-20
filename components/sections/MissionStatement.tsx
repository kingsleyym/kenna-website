import Container from "@/components/layout/Container";

export default function MissionStatement() {
  const stats = [
    {
      percentage: "98%",
      description:
        "that's how much quicker your team can generate standout marketing content with our platform.",
    },
    {
      percentage: "61%",
      description:
        "more views are received by listings with professional photography.",
    },
    {
      percentage: "52%",
      description:
        "increase in click-through rates for listings with floor plans.",
    },
    {
      percentage: "49%",
      description:
        "more qualified leads if listings include virtual tours.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-primary-50">
      <Container maxWidth="xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-dark-700 mb-4 tracking-tight leading-tight">
            In real estate, time is{" "}
            <span className="text-accent-400 font-semibold">money</span>.
          </h2>
          <h2 className="text-5xl md:text-6xl font-light text-dark-700 tracking-tight leading-tight">
            Our tech saves you both.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border-l-4 border-accent-400 pl-6 md:pl-8"
            >
              <div className="text-4xl md:text-5xl font-light text-dark-700 mb-3">
                {stat.percentage}
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
