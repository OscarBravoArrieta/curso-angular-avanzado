import {
    Component,
    ElementRef,
    signal,
    AfterViewInit,
    input,
    viewChild,
} from '@angular/core';

import WaveSurfer from 'wavesurfer.js';

@Component({
    selector: 'app-wave-audio',
    imports: [],
    templateUrl: './wave-audio.component.html',
})
export class WaveAudioComponent implements AfterViewInit {
    readonly audioUrl = input.required<string>();
    $wavContainerRef = viewChild.required<ElementRef<HTMLDivElement>>('wave');

    private ws!: WaveSurfer;
    isPlaying = signal(false);

    ngAfterViewInit() {
        this.ws = WaveSurfer.create({
            url: this.audioUrl(),
            container: this.$wavContainerRef()?.nativeElement,
        });
        this.ws.on('play', () => this.isPlaying.set(true));
        this.ws.on('pause', () => this.isPlaying.set(false));
    }

    playPause() {
        this.ws.playPause();
    }
}
