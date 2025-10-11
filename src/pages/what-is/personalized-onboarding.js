import Container from "@/components/LayoutBlocks/Container";
import Header from "@/components/LayoutBlocks/Header";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Footer from "@/components/LayoutBlocks/Footer";
import MainCTAButton from "@/components/MainCTAButton";
import BigInfoWithImage from "@/components/BigInfoWithImage";
import LayoutDivider from "@/components/LayoutBlocks/LayoutDivider";
import PageHeaderA from "@/components/PageLayout/PageHeaderA";
import MidSectionHeading from "@/components/PageLayout/MidSectionHeading";

const ProblemSection = () => {
  const problems = [
    {
      title: "Generic One-Size-Fits-All Approach",
      description:
        "Most onboarding processes treat every user the same, regardless of their role, experience level, or specific needs.",
      icon: "😕",
    },
    {
      title: "Manual Training Overload",
      description:
        "Teams rely on manual training calls, spreadsheets, and webinars that don't scale and create bottlenecks.",
      icon: "📋",
    },
    {
      title: "Poor User Experience",
      description:
        "Users get overwhelmed with irrelevant features and information, leading to high day-one churn rates.",
      icon: "😡",
    },
    {
      title: "No Personalization",
      description:
        "Different user personas need different workflows, but most tools can't adapt to individual needs.",
      icon: "🤖",
    },
  ];

  return (
    <section className="bg-white py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Most Onboarding Fails
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional onboarding approaches create friction instead of value.
            Here&apos;s what&apos;s broken and how Knolbase fixes it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const WhyPersonalizationSection = () => {
  const benefits = [
    {
      metric: "60-70%",
      description: "Reduction in time to value",
      detail: "Users reach their goals faster with relevant content",
      icon: "⚡",
    },
    {
      metric: "3x",
      description: "Higher product adoption",
      detail: "Personalized paths increase feature usage",
      icon: "📈",
    },
    {
      metric: "80%",
      description: "Better retention",
      detail: "Users stick around when onboarding feels relevant",
      icon: "🎯",
    },
    {
      metric: "90%",
      description: "Improved satisfaction",
      detail: "Personalized experiences build stronger relationships",
      icon: "😊",
    },
  ];

  return (
    <section className="py-20 bg-fuchsia-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Personalization Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized onboarding isn&apos;t just nice to have—it&apos;s
            essential for modern B2B software success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <div className="text-4xl font-bold text-fuchsia-600 mb-2">
                {benefit.metric}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.description}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const KnolbaseSolutionSection = () => {
  const solutions = [
    {
      title: "AI-Powered User Segmentation",
      description:
        "Automatically analyze user data and create personalized learning paths based on roles, experience, and goals",
      image: "/images/person-screenshot-01-3x.png",
      features: [
        "Role-based content delivery",
        "Experience level adaptation",
        "Goal-oriented learning paths",
      ],
    },
    {
      title: "Personalized Training Portals",
      description:
        "Each user gets their own portal with relevant videos, tasks, and progress tracking tailored to their needs",
      image: "/images/generate-with-ai.png",
      features: [
        "Custom learning paths",
        "Progress tracking",
        "Task management",
      ],
    },
    {
      title: "Contextual In-App Guidance",
      description:
        "Embed AI-powered help directly in your product - users get just-in-time assistance without leaving your app",
      image: "/images/in-app-screenshot--01-3x.png",
      features: [
        "Contextual Q&A",
        "Step-by-step guidance",
        "Just-in-time help",
      ],
    },
  ];

  return (
    <section>
      <div className="border-t border-b border-gray-200">
        <MidSectionHeading title="How Knolbase Delivers True Personalization at Scale" />
      </div>

      <LayoutDivider />

      <div className="border-b border-t border-gray-200 bg-white">
        <Container>
          <div className="md:flex justify-between gap-4">
            {solutions.map((solution, index) => (
              <BigInfoWithImage
                key={index}
                index={index}
                image={solution.image}
                title={solution.title}
                features={solution.features}
                description={solution.description}
              />
            ))}
          </div>
        </Container>
      </div>

      <LayoutDivider />
    </section>
  );
};

const PersonalizationStrategiesSection = () => {
  const strategies = [
    {
      title: "Segment Users by Jobs-to-be-Done",
      description:
        "Identify what users want to accomplish and create tailored experiences for each use case",
      example: "Admin users get setup guides, operators get workflow tutorials",
    },
    {
      title: "Progressive Feature Introduction",
      description:
        "Show users features most relevant to their role first, then introduce advanced features gradually",
      example: "Start with core features, then suggest complementary tools",
    },
    {
      title: "Contextual Help & Support",
      description:
        "Provide assistance exactly when and where users need it, without disrupting their workflow",
      example: "In-app tooltips, contextual Q&A, step-by-step guidance",
    },
    {
      title: "Feedback-Driven Optimization",
      description:
        "Continuously improve personalization based on user behavior and feedback data",
      example:
        "Track completion rates, identify drop-off points, optimize paths",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Personalization Strategies That Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based on proven strategies from top SaaS companies, here&apos;s how
            Knolbase implements effective personalization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {strategy.title}
              </h3>
              <p className="text-gray-600 mb-4">{strategy.description}</p>
              <div className="bg-white p-3 rounded border-l-4 border-fuchsia-500">
                <p className="text-sm text-gray-700">
                  <strong>Example:</strong> {strategy.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Personalize Your Onboarding?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Stop treating every user the same. Let Knolbase create personalized
            experiences that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://tally.so/r/3EdE7q"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-fuchsia-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-fuchsia-700 transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="mailto:hello@knolbase.com"
              className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

const seoConfig = {
  title:
    "Why Knolbase is Perfect for Personalized Onboarding | AI-Powered Training",
  description:
    "Discover how Knolbase uses AI to create personalized onboarding experiences that reduce time-to-value by 60-70% and increase user satisfaction by 90%.",
  canonical: "https://knolbase.com/what-is/personalized-onboarding",
  openGraph: {
    title:
      "Why Knolbase is Perfect for Personalized Onboarding | AI-Powered Training",
    description:
      "Discover how Knolbase uses AI to create personalized onboarding experiences that reduce time-to-value by 60-70% and increase user satisfaction by 90%.",
    url: "https://knolbase.com/what-is/personalized-onboarding",
    siteName: "Knolbase",
    images: [
      {
        url: "https://knolbase.com/images/personalized-onboarding-og.jpg",
        width: 1200,
        height: 630,
        alt: "Knolbase Personalized Onboarding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    handle: "@knolbase",
    site: "@knolbase",
    cardType: "summary_large_image",
  },
};

export default function PersonalizedOnboarding() {
  return (
    <>
      <NextSeo {...seoConfig} />
      <MainLayout title="Personalized Onboarding">
        <Header />
        <section className="border-b border-gray-200">
          <PageHeaderA
            title="Why Personalized Onboarding is the Future"
            subheading="Stop treating every user the same. Learn how Knolbase creates personalized experiences that drive real results."
          />
        </section>

        <ProblemSection />
        <WhyPersonalizationSection />
        <KnolbaseSolutionSection />
        <PersonalizationStrategiesSection />
        <CTASection />
        <Footer />
      </MainLayout>
    </>
  );
}
