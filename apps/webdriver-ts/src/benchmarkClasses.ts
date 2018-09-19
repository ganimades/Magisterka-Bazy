import { BenchmarkType } from "./benchmarks";
import { WebDriver } from "selenium-webdriver";
import { config, FrameworkData } from "./common";
import { ListType } from "../../shared/models";
import { clickElementById, testElementLocatedByXpath } from "./webdriverAccess";

export function fileName(framework: FrameworkData, benchmark: BenchmarkInfo) {
  return `${framework.name}_${benchmark.id}.json`;
}

export interface BenchmarkInfo {
  id: string;
  type: BenchmarkType;
  label: string;
  description: string;
}

export interface LighthouseData {
  TimeToConsistentlyInteractive: number;
  ScriptBootUpTtime: number;
  MainThreadWorkCost: number;
  TotalByteWeight: number;

  [propName: string]: number;
}

export interface StartupBenchmarkResult extends BenchmarkInfo {
  property: keyof LighthouseData;
}

export abstract class Benchmark {
  id: string;
  type: BenchmarkType;
  label: string;
  description: string;

  constructor(public benchmarkInfo: BenchmarkInfo) {
    this.id = benchmarkInfo.id;
    this.type = benchmarkInfo.type;
    this.label = benchmarkInfo.label;
    this.description = benchmarkInfo.description;
  }

  abstract async init(
      driver: WebDriver, framework: FrameworkData): Promise<any>;

  abstract async run(driver: WebDriver, framework: FrameworkData): Promise<any>;

  after(driver: WebDriver, framework: FrameworkData): Promise<any> {
    return null;
  }

  // Good fit for a single result creating Benchmark
  resultKinds(): Array<BenchmarkInfo> {
    return [this.benchmarkInfo];
  }

  extractResult(results: any[], resultKind: BenchmarkInfo): number[] {
    return results;
  };
}

export async function openSidePanel(driver: WebDriver) {
  try {
    await clickElementById(driver, 'toggle-sidepanel');
  } catch {
  }
}

export async function clearAll(driver: WebDriver) {
  await clickElementById(driver, 'utils-clearAll');
}

export async function setLayout(driver: WebDriver, listType: ListType) {
  await clickElementById(driver, `layout-${listType}`);
}

export function getXPath(listType: ListType, numberOfElements: number): string {
  switch (listType) {
    case "list":
      return `/descendant::div[contains(concat(' ',normalize-space(@class),' '),' task ')][${numberOfElements}]`;
    case "nested-list":
      return `/descendant::div[contains(concat(' ',normalize-space(@class),' '),' task ')][${numberOfElements}]`;
    case "grid":
      return `/descendant::div[contains(concat(' ',normalize-space(@class),' '),' task-minimal ')][${numberOfElements}]`;
    default:
      throw Error('Unsupported list type');
  }
}

export interface GeneratorBenchmarkData {
  elementId: string
  numberOfElements: number;
  generatorName: string
  listType?: ListType
}

export class GeneratorBenchmark extends Benchmark {
  constructor(protected data: GeneratorBenchmarkData) {
    super({
      id: `${data.elementId}_${data.listType}`,
      label: `${data.generatorName} - ${data.listType}`,
      description: `Generates ${data.generatorName} elements in a ${data.listType} layout (${config.WARMUP_COUNT} warmup iterations)`,
      type: BenchmarkType.CPU,
    } as BenchmarkInfo);
  }

  async init(driver: WebDriver, framework: FrameworkData): Promise<any> {
    await openSidePanel(driver);
    await setLayout(driver, this.data.listType);
    for (let i = 0; i < config.WARMUP_COUNT; i++) {
      await clearAll(driver);
      await clickElementById(driver, this.data.elementId);
    }
    await clearAll(driver);
  }

  async run(driver: WebDriver, framework: FrameworkData): Promise<any> {
    await clickElementById(driver, this.data.elementId);
    await testElementLocatedByXpath(driver,
        getXPath(this.data.listType, this.data.numberOfElements));
  }

  static allListTypes(data: GeneratorBenchmarkData): GeneratorBenchmark[] {
    const listTypes: ListType[] = ["list", "nested-list", "grid"];
    return listTypes.map(listType => {
      return new GeneratorBenchmark({
        ...data,
        listType: listType,
      });
    });
  }
}