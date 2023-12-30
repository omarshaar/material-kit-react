export function useResponsiveSizes(startValue, step, startOnBreakpoint = "xs", endOnBreakpoint = "xl", operation = "+") {
    const screenSizes = {
      xs: 0,
      sm: 0,
      md: 0,
      lg: 0,
      xl: 0,
    };
  
    let currentSize = startValue;
    let stop = false;
    let start = false;
  
    for (const key in screenSizes) {
      if (!start)  screenSizes[key] = currentSize;

      if (startOnBreakpoint === key) start = true;

      if (!stop && start && endOnBreakpoint !== screenSizes[key]) {
        operation == "+" ? screenSizes[key] = currentSize + step : screenSizes[key] = currentSize - step 
        currentSize = screenSizes[key];
      }
  
      if (start && endOnBreakpoint === key || stop === true) {
        stop = true;
        screenSizes[key] = currentSize;
      }
    }
  
    return screenSizes;
  }
  