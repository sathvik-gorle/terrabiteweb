"use client";

import MetricCard from "@/components/MetricCard";

export default function MetricsBar() {
  const today = "Oct 16, 2025";

  const metrics = [
    {
      label: "Concrete Placed",
      value: "31,000",
      unit: "lb",
      date: today,
      tooltip: "Total mass of biochar-enhanced concrete placed in pilot projects to date.",
    },
    {
      label: "CO₂ Sequestered",
      value: "10,138",
      unit: "lb CO₂",
      date: today,
      tooltip: "Carbon dioxide locked in biochar through pyrolysis. Stable sequestration for 100+ years based on biochar permanence studies.",
    },
    {
      label: "Food Waste Diverted",
      value: "12,110",
      unit: "lb",
      date: today,
      tooltip: "Food waste diverted from landfills and converted into biochar through pyrolysis process.",
    },
    {
      label: "28-Day Strength (Target)",
      value: "4,000",
      unit: "psi (ASTM C39)",
      date: today,
      tooltip: "Target compressive strength meeting standard structural concrete specifications. Testing in progress.",
    },
    {
      label: "Biochar Integration",
      value: "High",
      unit: "Performance",
      date: today,
      tooltip: "Biochar successfully integrated into concrete mix without compromising structural integrity.",
    },
    {
      label: "Accelerator",
      value: "Launch Chapel Hill",
      unit: "",
      date: today,
      tooltip: "Terrabite is accelerating through Launch Chapel Hill, exploring materials science's potential for climate impact.",
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              label={metric.label}
              value={metric.value}
              unit={metric.unit}
              date={metric.date}
              tooltip={metric.tooltip}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

