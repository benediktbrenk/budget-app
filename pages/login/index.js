import Image from "next/image";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import {
  ContainerBox,
  FeatureSection,
  SectionContainer,
} from "@/components/ProtectPages/ProtectPages.styled";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (session && status === "authenticated") {
    router.push("/");
    return;
  }
  return (
    <ContainerBox>
      <SectionContainer>
        <Image
          width={240}
          height={180}
          alt="app-logo"
          src="/assets/expenso-logo-bunte-karten.png"
        />
        <h1>Manage Your Finances Effortlessly</h1>
        <p>
          Track, analyze, and optimize your expenses with our user-friendly
          <strong> Expenso App.</strong>
        </p>
        <button
          type="button"
          onClick={() => signIn({ callbackUrl: "/" })}
          style={{
            font: "inherit",
            fontSize: "1.17em",
            fontWeight: "bold",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          START NOW
        </button>
      </SectionContainer>
      <h2>Why Our Expenso App?</h2>
      <SectionContainer>
        <FeatureSection>
          <h3>Simple Expense Tracking</h3>
          <p>
            Record your daily expenses in seconds with our intuitive interface.
          </p>
        </FeatureSection>
      </SectionContainer>
      <SectionContainer>
        <FeatureSection>
          <h3>Detailed Analysis</h3>
          <p>
            Get comprehensive reports and analyses to understand your spending
            patterns and identify savings opportunities.
          </p>
        </FeatureSection>
      </SectionContainer>
      <SectionContainer>
        <FeatureSection>
          <h3>Budget Management</h3>
          <p>
            Set monthly budgets and receive notifications when you exceed them.
          </p>
        </FeatureSection>
      </SectionContainer>
      <SectionContainer>
        <FeatureSection>
          <h3>Secure and Protected</h3>
          <p>
            Your data is protected with state-of-the-art encryption technology.
          </p>
        </FeatureSection>
      </SectionContainer>
      <SectionContainer>
        <FeatureSection>
          <h3>Multi-Platform Support</h3>
          <p>Use our app on your smartphone, tablet, or computer.</p>
        </FeatureSection>
      </SectionContainer>
    </ContainerBox>
  );
}
