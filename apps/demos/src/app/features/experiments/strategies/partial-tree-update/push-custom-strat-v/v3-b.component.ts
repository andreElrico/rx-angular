import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rxa-v3-b',
  template: `
    <rxa-visualizer>
      <div visualizerHeader>
        <h1>B<small>v3</small></h1>
      </div>
      <div class="row w-100">
        <div class="col">
        <rxa-v3-d></rxa-v3-d>
        </div>
      </div>
    </rxa-visualizer>
  `,
  host: { class: 'w-100' }, changeDetection: ChangeDetectionStrategy.OnPush
})
export class V3BComponent {

  constructor() {
  }

}
