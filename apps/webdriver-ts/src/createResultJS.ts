import * as fs from 'fs';
import { FrameworkData, frameworks, JSONResult } from './common'
import { benchmarks } from './benchmarks'
import { BenchmarkInfo, fileName } from "./benchmarkClasses";

let frameworkMap = new Map<string, FrameworkData>();
frameworks.map(f => frameworkMap.set(f.name, f));

let results: Map<string, Map<string, JSONResult>> = new Map();

let resultJS = "export let results=[";

let allBenchmarks: BenchmarkInfo[] = [];

benchmarks.forEach((benchmark, bIdx) => {
  let r = benchmark.resultKinds ? benchmark.resultKinds() : [benchmark];
  r.forEach((benchmarkInfo) => {
    allBenchmarks.push(benchmarkInfo);
  });
});

frameworks.forEach((framework, fIdx) => {
  allBenchmarks.forEach((benchmarkInfo) => {
    let name = `${fileName(framework, benchmarkInfo)}`;
    let file = './results/' + name;
    if (fs.existsSync(file)) {
      let data = fs.readFileSync(file, {
        encoding: 'utf-8'
      });
      resultJS += '\n' + data + ',';
    } else {
      console.log("MISSING FILE", file);
    }
  });
});


resultJS += '];\n';
resultJS += 'export let frameworks = ' + JSON.stringify(frameworks) + ";\n";
resultJS += 'export let benchmarks = ' + JSON.stringify(allBenchmarks) + ";\n";

fs.writeFileSync('../webdriver-ts-results/src/results.ts', resultJS, {encoding: 'utf-8'});

