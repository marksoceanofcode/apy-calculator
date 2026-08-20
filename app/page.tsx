import Image from "next/image";
import { PageContainer } from "@/components/PageContainer";
import { ApyCalculatorContainer } from "../components/ApyCalculatorContainer";

export default function Home() {
  return (
    <PageContainer>
      <ApyCalculatorContainer />
    </PageContainer>
  );
}
