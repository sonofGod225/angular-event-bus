import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-event-bus.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularEventBusService {
    constructor() {
        this.channels = {};
    }
    /**
     * Subscribe to a topic and provide a single handler/observer.
     * @param {?} topic The name of the topic to subscribe to.
     * @param {?} observer The observer or callback function to listen when changes are published.
     *
     * @return {?} Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
     */
    subscribe(topic, observer) {
        if (!this.channels[topic]) {
            this.channels[topic] = new Subject();
        }
        return this.channels[topic].subscribe(observer);
    }
    /**
     * Publish some data to the subscribers of the given topic.
     * @param {?} topic The name of the topic to emit data to.
     * @param {?} data data in any format to pass on.
     * @return {?}
     */
    publish(topic, data) {
        /** @type {?} */
        const subject = this.channels[topic];
        if (!subject) {
            // Or you can create a new subject for future subscribers
            return;
        }
        subject.next(data);
    }
    /**
     * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
     * destroy the observable of the topic using this method.
     * @param {?} topic The name of the topic to destroy.
     * @return {?}
     */
    destroy(topic) {
        /** @type {?} */
        const subject = this.channels[topic];
        if (!subject) {
            return;
        }
        subject.complete();
        delete this.channels[topic];
    }
}
AngularEventBusService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ AngularEventBusService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularEventBusService_Factory() { return new AngularEventBusService(); }, token: AngularEventBusService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularEventBusService.prototype.channels;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-event-bus.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularEventBusComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AngularEventBusComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-angular-event-bus',
                template: `
    <p>
      angular-event-bus works!
    </p>
  `
            }] }
];
/** @nocollapse */
AngularEventBusComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-event-bus.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularEventBusModule {
}
AngularEventBusModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AngularEventBusComponent],
                imports: [],
                exports: [AngularEventBusComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-event-bus.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularEventBusComponent, AngularEventBusModule, AngularEventBusService };
//# sourceMappingURL=angular-event-bus.js.map
