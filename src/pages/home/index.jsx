import { About } from "./about";
import { Benefits } from "./benefits";
import { Hero } from "./hero";
import { Services } from "./services";

export function Home() {
    return (
        <main>
            <Hero />
            <Benefits />
            <Services />
            <About />
        </main>
    );
};