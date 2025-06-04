import {Component, ElementRef, ViewChild} from '@angular/core';
import { TimerComponent } from './timer-component/timer-component.component';
@Component({
  selector: 'app-test3',
  imports: [TimerComponent],
  templateUrl: './test3.component.html',
  styleUrl: './test3.component.scss'
})
export class Test3Component {
  imageUrl = 'https://pic.ntimg.cn/file/20201104/25013496_173407810000_2.jpg';
  audioUrl = 'your-music-url.mp3'; // 替换为实际的音乐文件 URL

  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef;

  playAudio() {
    this.audioPlayer.nativeElement.play();
  }

  pauseAudio() {
    this.audioPlayer.nativeElement.pause();
  }
}
