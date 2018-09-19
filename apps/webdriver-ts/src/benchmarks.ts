import { Benchmark, GeneratorBenchmark } from "./benchmarkClasses";

export enum BenchmarkType { CPU, MEM, STARTUP }

const SHORT_TIMEOUT = 20 * 1000;

const benchGenRandom100 = GeneratorBenchmark.allListTypes({
  elementId: 'gen-random100',
  numberOfElements: 100,
  generatorName: 'Random 100',
});

const benchGenRandom500 = GeneratorBenchmark.allListTypes({
  elementId: 'gen-random500',
  numberOfElements: 500,
  generatorName: 'Random 500',
});

const benchGenRandom1k = GeneratorBenchmark.allListTypes({
  elementId: 'gen-random1k',
  numberOfElements: 1000,
  generatorName: 'Random 1k',
});

const benchGenRandom5k = GeneratorBenchmark.allListTypes({
  elementId: 'gen-random5k',
  numberOfElements: 5000,
  generatorName: 'Random 5k',
});

const benchGenRandom10k = GeneratorBenchmark.allListTypes({
  elementId: 'gen-random10k',
  numberOfElements: 10000,
  generatorName: 'Random 10k',
});

export const benchmarks: Array<Benchmark> = [
  // ...benchGenRandom100,
  // ...benchGenRandom500,
  ...benchGenRandom1k,
  // ...benchGenRandom5k,
  // ...benchGenRandom10k,
];