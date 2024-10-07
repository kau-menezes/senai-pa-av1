import { describe } from "node:test";

const nextConfig = {
    rewrites: () => {
        return [
                {
                    source: "/",
                    destination: "/home" 
                },
                {
                    source: "/imc",
                    destination: "/imc"
                },
                {
                    source: "/average",
                    destination: "/average"
                }
            ]
        
    }

};

export default nextConfig;