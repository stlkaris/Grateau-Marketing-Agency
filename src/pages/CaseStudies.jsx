import React from 'react'

const CaseStudies = () => {
    const caseStudies = [
        {
          id: 1,
          client: "Tech Innovations Ltd.",
          challenge: "Low online visibility and declining website traffic.",
          solution:
            "Implemented an SEO strategy, optimized website content, and launched a targeted ad campaign.",
          results: "Increased organic traffic by 150% within 3 months.",
          video: "/videos/tech1.mp4",
        },
        {
          id: 2,
          client: "Healthy Bites Cafe",
          challenge: "Struggling to engage customers on social media.",
          solution:
            "Created a content calendar, launched Instagram and Facebook ad campaigns, and introduced influencer marketing.",
          results: "Gained 5,000 new followers and a 200% increase in online orders.",
          video: "/videos/heathybites1.mp4",
        },
      ];
  return (
    <div className="case-studies">
    <header className="header text-center bg-blue-600 text-white py-6">
      <h1 className="text-4xl font-bold">Our Success Stories</h1>
      <p className="text-lg mt-2">
        Discover how we’ve helped businesses achieve their digital marketing
        goals.
      </p>
    </header>

    <div className="case-study-container mx-auto py-8 px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
      {caseStudies.map((study) => (
        <div
          key={study.id}
          className="case-study-card shadow-lg border rounded-lg overflow-hidden"
        >
             <video
              autoPlay
              loop
              muted
              playsInline
              className="max-w-full rounded shadow-lg h-90"
            >
              <source src={study.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{study.client}</h2>
            <h3 className="text-lg font-semibold text-blue-500">Challenge</h3>
            <p className="text-gray-700 mb-4">{study.challenge}</p>
            <h3 className="text-lg font-semibold text-blue-500">Solution</h3>
            <p className="text-gray-700 mb-4">{study.solution}</p>
            <h3 className="text-lg font-semibold text-blue-500">Results</h3>
            <p className="text-gray-700">{study.results}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default CaseStudies
