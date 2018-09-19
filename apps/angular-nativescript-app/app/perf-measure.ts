let startTime;
let lastMeasure;

export function startMeasure(name) {
  // performance.mark('mark_start_' + name);
  // startTime = performance.now();
  // lastMeasure = name;
}

export function stopMeasure() {
  // const last = lastMeasure;
  // if (lastMeasure) {
  //   window.setTimeout(function() {
  //     lastMeasure = null;
  //     let duration = 0;
  //     performance.mark('mark_end_' + last);
  //     window.performance.measure('measure_' + last, 'mark_start_' +
  //         last, 'mark_end_' + last);
  //     const items = performance.getEntriesByType('measure');
  //     for (let i = 0; i < items.length; ++i) {
  //       const req = items[i];
  //       duration = req.duration;
  //       console.log(req.name + ' took ' + req.duration + 'ms');
  //     }
  //     performance.clearMeasures();
  //   }, 0);
  // }
}