/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-event-bus.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class AngularEventBusService {
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
/** @nocollapse */ AngularEventBusService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AngularEventBusService_Factory() { return new AngularEventBusService(); }, token: AngularEventBusService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularEventBusService.prototype.channels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1ldmVudC1idXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZXZlbnQtYnVzLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItZXZlbnQtYnVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBZ0IsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUs3QyxNQUFNLE9BQU8sc0JBQXNCO0lBSG5DO1FBS1UsYUFBUSxHQUFxQyxFQUFFLENBQUM7S0E4Q3pEOzs7Ozs7OztJQXJDQyxTQUFTLENBQUMsS0FBYSxFQUFFLFFBQTBCO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztTQUMzQztRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7OztJQU9ELE9BQU8sQ0FBQyxLQUFhLEVBQUUsSUFBUzs7Y0FDeEIsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWix5REFBeUQ7WUFDekQsT0FBTztTQUNSO1FBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7Ozs7O0lBT0QsT0FBTyxDQUFDLEtBQWE7O2NBQ2IsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPO1NBQ1I7UUFFRCxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQWxERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7O0lBR0MsMENBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJFdmVudEJ1c1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgY2hhbm5lbHM6IHsgW2tleTogc3RyaW5nXTogU3ViamVjdDxhbnk+OyB9ID0ge307XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBhIHRvcGljIGFuZCBwcm92aWRlIGEgc2luZ2xlIGhhbmRsZXIvb2JzZXJ2ZXIuXG4gICAqIEBwYXJhbSB0b3BpYyBUaGUgbmFtZSBvZiB0aGUgdG9waWMgdG8gc3Vic2NyaWJlIHRvLlxuICAgKiBAcGFyYW0gb2JzZXJ2ZXIgVGhlIG9ic2VydmVyIG9yIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGxpc3RlbiB3aGVuIGNoYW5nZXMgYXJlIHB1Ymxpc2hlZC5cbiAgICpcbiAgICogQHJldHVybnMgU3Vic2NyaXB0aW9uIGZyb20gd2hpY2ggeW91IGNhbiB1bnN1YnNjcmliZSB0byByZWxlYXNlIG1lbW9yeSByZXNvdXJjZXMgYW5kIHRvIHByZXZlbnQgbWVtb3J5IGxlYWsuXG4gICAqL1xuICBzdWJzY3JpYmUodG9waWM6IHN0cmluZywgb2JzZXJ2ZXI6IChfOiBhbnkpID0+IHZvaWQpOiBTdWJzY3JpcHRpb24ge1xuICAgIGlmICghdGhpcy5jaGFubmVsc1t0b3BpY10pIHtcbiAgICAgIHRoaXMuY2hhbm5lbHNbdG9waWNdID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW3RvcGljXS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1Ymxpc2ggc29tZSBkYXRhIHRvIHRoZSBzdWJzY3JpYmVycyBvZiB0aGUgZ2l2ZW4gdG9waWMuXG4gICAqIEBwYXJhbSB0b3BpYyBUaGUgbmFtZSBvZiB0aGUgdG9waWMgdG8gZW1pdCBkYXRhIHRvLlxuICAgKiBAcGFyYW0gZGF0YSBkYXRhIGluIGFueSBmb3JtYXQgdG8gcGFzcyBvbi5cbiAgICovXG4gIHB1Ymxpc2godG9waWM6IHN0cmluZywgZGF0YTogYW55KTogdm9pZCB7XG4gICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuY2hhbm5lbHNbdG9waWNdO1xuICAgIGlmICghc3ViamVjdCkge1xuICAgICAgLy8gT3IgeW91IGNhbiBjcmVhdGUgYSBuZXcgc3ViamVjdCBmb3IgZnV0dXJlIHN1YnNjcmliZXJzXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3ViamVjdC5uZXh0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4geW91IGFyZSBzdXJlIHRoYXQgeW91IGFyZSBkb25lIHdpdGggdGhlIHRvcGljIGFuZCB0aGUgc3Vic2NyaWJlcnMgbm8gbG9uZ2VyIG5lZWRzIHRvIGxpc3RlbiB0byBhIHBhcnRpY3VsYXIgdG9waWMsIHlvdSBjYW5cbiAgICogZGVzdHJveSB0aGUgb2JzZXJ2YWJsZSBvZiB0aGUgdG9waWMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqIEBwYXJhbSB0b3BpYyBUaGUgbmFtZSBvZiB0aGUgdG9waWMgdG8gZGVzdHJveS5cbiAgICovXG4gIGRlc3Ryb3kodG9waWM6IHN0cmluZyk6IG51bGwge1xuICAgIGNvbnN0IHN1YmplY3QgPSB0aGlzLmNoYW5uZWxzW3RvcGljXTtcbiAgICBpZiAoIXN1YmplY3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdWJqZWN0LmNvbXBsZXRlKCk7XG4gICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbdG9waWNdO1xuICB9XG59XG4iXX0=