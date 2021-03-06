import { AppInsightsCore, IConfiguration, ITelemetryItem, IPlugin } from '@microsoft/applicationinsights-core-js';

export class ChannelPlugin implements IPlugin {
    public isFlushInvoked = false;
    public isTearDownInvoked = false;
    public isResumeInvoked = false;
    public isPauseInvoked = false;
    public identifier = 'Sender';
    public priority = 1001;
  
    constructor() {
        this.processTelemetry = this._processTelemetry.bind(this);
    }
    public pause(): void {
        this.isPauseInvoked = true;
    }
  
    public resume(): void {
        this.isResumeInvoked = true;
    }
  
    public teardown(): void {
        this.isTearDownInvoked = true;
    }
  
    flush(async?: boolean, callBack?: () => void): void {
        this.isFlushInvoked = true;
        if (callBack) {
        callBack();
        }
    }
  
    public processTelemetry(env: ITelemetryItem) { }
  
    setNextPlugin(next: any) {
        // no next setup
    }
  
    public initialize = (config: IConfiguration, core: AppInsightsCore, plugin: IPlugin[]) => {
    }
  
    private _processTelemetry(env: ITelemetryItem) {
    }
}

export const analyticsExtension = {
    initialize: (config, core, extensions) => { },
    trackEvent: (event, customProperties) => { },
    trackPageView: (pageView, customProperties) => { },
    trackException: (exception, customProperties) => { },
    trackTrace: (trace, customProperties) => { },
    trackMetric: (metric, customProperties) => { },
    _onerror: (exception) => { },
    startTrackPage: (name) => { },
    stopTrackPage: (name, properties, measurements) => { },
    startTrackEvent: (name) => { },
    stopTrackEvent: (name, properties, measurements) => { },
    addTelemetryInitializer: (telemetryInitializer) => { },
    trackPageViewPerformance: (pageViewPerformance, customProperties) => { },
    processTelemetry: (env) => { },
    setNextPlugin: (next) => { },
    identifier: 'ApplicationInsightsAnalytics'
};
  