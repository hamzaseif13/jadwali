import { BruteForceGenerator, Generator } from "./BruteForceGenerator";
const generateService = async (options) => {
    const sections = await Generator.fetchSections(options.courses);
    const generator = new BruteForceGenerator(options);
    let result = null;
    try {
        result = generator.generate(sections);
    }
    catch (error) {
        console.log(error);
    }
    return result;
};
export { generateService };
