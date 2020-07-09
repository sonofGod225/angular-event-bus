(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('angular-event-bus', ['exports', '@angular/core', 'rxjs'], factory) :
    (global = global || self, factory(global['angular-event-bus'] = {}, global.ng.core, global.rxjs));
}(this, (function (exports, core, rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/angular-event-bus.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularEventBusService = /** @class */ (function () {
        function AngularEventBusService() {
            this.channels = {};
        }
        /**
         * Subscribe to a topic and provide a single handler/observer.
         * @param topic The name of the topic to subscribe to.
         * @param observer The observer or callback function to listen when changes are published.
         *
         * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
         */
        /**
         * Subscribe to a topic and provide a single handler/observer.
         * @param {?} topic The name of the topic to subscribe to.
         * @param {?} observer The observer or callback function to listen when changes are published.
         *
         * @return {?} Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
         */
        AngularEventBusService.prototype.subscribe = /**
         * Subscribe to a topic and provide a single handler/observer.
         * @param {?} topic The name of the topic to subscribe to.
         * @param {?} observer The observer or callback function to listen when changes are published.
         *
         * @return {?} Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
         */
        function (topic, observer) {
            if (!this.channels[topic]) {
                this.channels[topic] = new rxjs.Subject();
            }
            return this.channels[topic].subscribe(observer);
        };
        /**
         * Publish some data to the subscribers of the given topic.
         * @param topic The name of the topic to emit data to.
         * @param data data in any format to pass on.
         */
        /**
         * Publish some data to the subscribers of the given topic.
         * @param {?} topic The name of the topic to emit data to.
         * @param {?} data data in any format to pass on.
         * @return {?}
         */
        AngularEventBusService.prototype.publish = /**
         * Publish some data to the subscribers of the given topic.
         * @param {?} topic The name of the topic to emit data to.
         * @param {?} data data in any format to pass on.
         * @return {?}
         */
        function (topic, data) {
            /** @type {?} */
            var subject = this.channels[topic];
            if (!subject) {
                // Or you can create a new subject for future subscribers
                return;
            }
            subject.next(data);
        };
        /**
         * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
         * destroy the observable of the topic using this method.
         * @param topic The name of the topic to destroy.
         */
        /**
         * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
         * destroy the observable of the topic using this method.
         * @param {?} topic The name of the topic to destroy.
         * @return {?}
         */
        AngularEventBusService.prototype.destroy = /**
         * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
         * destroy the observable of the topic using this method.
         * @param {?} topic The name of the topic to destroy.
         * @return {?}
         */
        function (topic) {
            /** @type {?} */
            var subject = this.channels[topic];
            if (!subject) {
                return;
            }
            subject.complete();
            delete this.channels[topic];
        };
        AngularEventBusService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ AngularEventBusService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AngularEventBusService_Factory() { return new AngularEventBusService(); }, token: AngularEventBusService, providedIn: "root" });
        return AngularEventBusService;
    }());
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
    var AngularEventBusComponent = /** @class */ (function () {
        function AngularEventBusComponent() {
        }
        /**
         * @return {?}
         */
        AngularEventBusComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        AngularEventBusComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-angular-event-bus',
                        template: "\n    <p>\n      angular-event-bus works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        AngularEventBusComponent.ctorParameters = function () { return []; };
        return AngularEventBusComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/angular-event-bus.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularEventBusModule = /** @class */ (function () {
        function AngularEventBusModule() {
        }
        AngularEventBusModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [AngularEventBusComponent],
                        imports: [],
                        exports: [AngularEventBusComponent]
                    },] }
        ];
        return AngularEventBusModule;
    }());

    exports.AngularEventBusComponent = AngularEventBusComponent;
    exports.AngularEventBusModule = AngularEventBusModule;
    exports.AngularEventBusService = AngularEventBusService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-event-bus.umd.js.map
