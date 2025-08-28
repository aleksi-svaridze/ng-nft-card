import { Component } from '@angular/core';

interface ICard {
  card__image: string;

  card__title: string;
  card__description: string;

  card__info_stats: number;
  card__info_stats__icon: string;

  card__info_deal: number;
  card__info_deal__icon: string;

  card__author_name: string;
  card__author_image: string;
}

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  card: ICard = {
    card__image: 'assets/card-img.png',

    card__title: 'equilibrium #3429',
    card__description: ' Our <span>equilibrium</span> collection promotes balance and calm.',

    card__info_stats: 0.041,
    card__info_stats__icon: 'assets/stats-icon.png',

    card__info_deal: 3,
    card__info_deal__icon: 'assets/clock-icon.png',

    card__author_name: 'Jules Wyvern',
    card__author_image: 'assets/Oval.png',
  };
}
