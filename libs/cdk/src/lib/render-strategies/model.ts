import { Notification, Observable } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

export enum RxNotificationKind {
  suspense = 'suspense',
  next = 'next',
  error = 'error',
  complete = 'complete'
}

type NotificationExtract = 'value' | 'hasValue';

export type RxNextNotification<T> = Pick<Notification<T>, NotificationExtract> & { kind: RxNotificationKind } & {error: boolean} & {complete: boolean};
export type RxSuspenseNotification = Pick<Notification<unknown>, NotificationExtract> & { kind: RxNotificationKind.suspense } & {error: false} & {complete: false};
export type RxErrorNotification = Pick<Notification<unknown>, NotificationExtract> & { kind: RxNotificationKind.error } & {error: any} & {complete: false};
export type RxCompleteNotification = Pick<Notification<unknown>, NotificationExtract> & { kind: RxNotificationKind.complete } & {complete: boolean} & {error: false};
export type RxNotification<T> = RxNextNotification<T> | RxSuspenseNotification | RxErrorNotification | RxCompleteNotification;

export type RenderWork = <T = unknown>(
  cdRef: ChangeDetectorRef,
  scope?: object,
  notification?: RxNotification<T>
) => void;
export type RenderBehavior = <T = unknown>(
  work: any,
  scope: object
) => (o: Observable<T>) => Observable<T>;

export interface StrategyCredentials {
  name: string;
  work: RenderWork;
  behavior: RenderBehavior;
}

export interface StrategyCredentialsMap {
  [name: string]: StrategyCredentials;
}
