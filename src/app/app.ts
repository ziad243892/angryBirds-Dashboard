import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

type StatCard = {
  label: string;
  value: string;
  note: string;
  tone: 'orange' | 'blue' | 'purple' | 'green';
};

type HighlightCard = {
  title: string;
  subtitle: string;
  imageClass: string;
  cta: string;
};

@Component({
  selector: 'app-root',
  imports: [NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly pageTitle = 'Angry Birds Friends';
  protected readonly playerTag = 'RCb8f8...9607';
  protected readonly segment = 'Segment 66';

  protected readonly statCards: StatCard[] = [
    { label: 'Sessions', value: '132', note: 'Last 14 days: 48', tone: 'orange' },
    { label: 'Days Played', value: '41', note: 'Active 7/7 days', tone: 'blue' },
    { label: 'Video Rewards', value: '286', note: 'Ads impressions: 340', tone: 'purple' },
    { label: 'Avg Minutes / Day', value: '61.8', note: '7-day rolling average', tone: 'green' }
  ];

  protected readonly highlights: HighlightCard[] = [
    {
      title: 'New Tournament',
      subtitle: 'Tap to reveal event and unlock rewards.',
      imageClass: 'highlight-tournament',
      cta: 'Reveal Event'
    },
    {
      title: 'Piggy Tower',
      subtitle: 'Floor 1 challenge is live now.',
      imageClass: 'highlight-tower',
      cta: 'Start Challenge'
    },
    {
      title: 'Creative Birdsona',
      subtitle: 'Use your style and customize your profile.',
      imageClass: 'highlight-birdsona',
      cta: 'Customize'
    }
  ];
}
