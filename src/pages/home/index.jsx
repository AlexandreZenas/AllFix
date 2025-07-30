

import { About } from "./about";
import { Benefits } from "./benefits";
import { BenefitsAlternative } from "./benefitsAlternative";
import { Cta } from "./cta";
import { Faq } from "./faq";
import { Hero } from "./hero";
import { Services } from "./services";

export function Home() {
    return (
        <main>
            <Hero />
            {/* <Benefits /> */}
            <Services />
            <About />
            <Cta />
            <Faq/>
        </main>
    );
};