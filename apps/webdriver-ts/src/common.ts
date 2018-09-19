export interface JSONResult {
  framework: string,
  benchmark: string,
  type: string,
  min: number,
  max: number,
  mean: number,
  geometricMean: number,
  standardDeviation: number,
  median: number,
  values: Array<number>
}

export interface BenchmarkError {
  imageFile: string;
  exception: string
}

export interface BenchmarkOptions {
  outputDirectory: string;
  port: string;
  headless?: boolean;
  chromeBinaryPath?: string;
  numIterationsForAllBenchmarks: number;
}

export const config = {
  PORT: 8080,
  REPEAT_RUN: 10,
  DROP_WORST_RUN: 0,
  WARMUP_COUNT: 5,
  TIMEOUT: 1000 * 10,
  LOG_PROGRESS: true,
  LOG_DETAILS: false,
  LOG_DEBUG: true,
  EXIT_ON_ERROR: false,
  STARTUP_DURATION_FROM_EVENTLOG: true,
  STARTUP_SLEEP_DURATION: 1000,
  FORK_CHROMEDRIVER: true,
};

export interface FrameworkData {
  name: string;
  uri: string;
  keyed: boolean;
  useShadowRoot: boolean;
}

interface Options {
  uri: string;
  useShadowRoot?: boolean;
}

function f(
    name: string, keyed: boolean, options: Options = {
      uri: null,
      useShadowRoot: false,
    }): FrameworkData {
  let ret = {
    name,
    keyed,
    uri: options.uri ? options.uri : name,
    useShadowRoot: options.useShadowRoot,
  };
  return ret;
}

export let frameworks = [
  f('angular', true, {uri: 'angular/dist'}),
  f('reactjs', true, {uri: 'reactjs/build'}),
  f('vuejs', true, {uri: 'vuejs/dist'}),
];
