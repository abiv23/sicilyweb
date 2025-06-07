import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

interface LearningResource {
  icon: string;
  title: string;
  description: string;
  recommendation: string;
  pricing: { label: string; price: string; type: 'free' | 'paid' }[];
  url: string;
}

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <div class="min-h-screen bg-dark-bg py-8">
      <div class="container mx-auto px-6 max-w-6xl">
        <h1 class="text-5xl font-bold text-center mb-4 text-dark-text">
          🇮🇹 Learn Italian for Sicily
        </h1>
        <p class="text-center text-xl text-dark-text-secondary mb-12">Your complete guide to mastering basic Italian in 1.5 years</p>
        
        <h2 class="text-3xl font-bold mb-8 text-dark-text border-l-4 border-sicilian-sea pl-4">🗣️ Essential Phrases to Master First</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <mat-card class="p-6 bg-sicilian-sea shadow-xl">
            <h4 class="text-xl font-bold mb-4">Greetings</h4>
            <ul class="space-y-2">
              <li><strong>Ciao</strong> - Hello/Bye</li>
              <li><strong>Buongiorno</strong> - Good morning</li>
              <li><strong>Buonasera</strong> - Good evening</li>
            </ul>
          </mat-card>
          
          <mat-card class="p-6 bg-italian-green shadow-xl">
            <h4 class="text-xl font-bold mb-4">Basic Courtesy</h4>
            <ul class="space-y-2">
              <li><strong>Grazie</strong> - Thank you</li>
              <li><strong>Prego</strong> - You're welcome</li>
              <li><strong>Scusi</strong> - Excuse me</li>
            </ul>
          </mat-card>
          
          <mat-card class="p-6 bg-sicilian-wine shadow-xl">
            <h4 class="text-xl font-bold mb-4">Travel Essentials</h4>
            <ul class="space-y-2">
              <li><strong>Dove si trova...?</strong> - Where is...?</li>
              <li><strong>Quanto costa?</strong> - How much?</li>
              <li><strong>Parla inglese?</strong> - Do you speak English?</li>
            </ul>
          </mat-card>
          
          <mat-card class="p-6 bg-italian-red shadow-xl">
            <h4 class="text-xl font-bold mb-4">Food & Dining</h4>
            <ul class="space-y-2">
              <li><strong>Vorrei...</strong> - I would like...</li>
              <li><strong>Il conto, per favore</strong> - The check, please</li>
              <li><strong>È delizioso!</strong> - It's delicious!</li>
            </ul>
          </mat-card>
        </div>

        <h2 class="text-3xl font-bold mb-8 text-dark-text border-l-4 border-italian-green pl-4">📚 Learning Resources & Pricing</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          @for (resource of learningResources; track resource.title) {
            <mat-card class="p-6 bg-dark-surface border border-dark-border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-dark-text">
              <div class="flex items-center mb-4">
                <span class="text-3xl mr-4">{{ resource.icon }}</span>
                <h3 class="text-2xl font-bold text-dark-text">{{ resource.title }}</h3>
              </div>
              
              <p class="text-dark-text-secondary mb-4 leading-relaxed">{{ resource.description }}</p>
              
              <div class="bg-dark-elevated p-3 rounded-lg mb-4">
                <strong class="text-sicilian-sea">Recommendation:</strong>
                <span class="text-dark-text-secondary ml-2">{{ resource.recommendation }}</span>
              </div>
              
              <div class="flex flex-wrap gap-2 mb-4">
                @for (price of resource.pricing; track price.label) {
                  <span 
                    [ngClass]="price.type === 'free' ? 'bg-italian-green text-white' : 'bg-italian-red text-white'"
                    class="px-3 py-1 rounded-full text-sm font-semibold">
                    {{ price.label }}: {{ price.price }}
                  </span>
                }
              </div>
              
              <a [href]="resource.url" target="_blank" 
                 class="inline-block bg-sicilian-sea hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 no-underline">
                Start Learning →
              </a>
            </mat-card>
          }
        </div>

        <mat-card class="p-8 bg-sicilian-sunset/30 border border-sicilian-sunset/50 mb-8 shadow-xl text-dark-text">
          <h3 class="text-2xl font-bold mb-4 text-sicilian-sunset">🏝️ Sicily-Specific Tips</h3>
          <p class="text-dark-text-secondary leading-relaxed mb-4">
            Sicilians speak with a distinct accent and use some local dialect words, but standard Italian will serve you perfectly. 
            They're incredibly warm people who'll be patient with your learning efforts!
          </p>
          <p class="text-dark-text-secondary leading-relaxed">
            <strong class="text-sicilian-sunset">Cultural note:</strong> Sicilians especially appreciate when visitors make an effort to speak Italian, 
            even just basic phrases. Your attempts will be met with smiles and encouragement.
          </p>
        </mat-card>

        <h2 class="text-3xl font-bold mb-8 text-dark-text border-l-4 border-sicilian-sunset pl-4">📅 Your 1.5-Year Learning Timeline</h2>
        
        <mat-card class="p-8 bg-dark-surface border border-dark-border shadow-xl border-l-4 border-l-sicilian-sunset mb-8 text-dark-text">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-sicilian-sea/30 p-6 rounded-xl border border-sicilian-sea/50">
              <h4 class="font-bold text-sicilian-sea mb-2">Months 1-3</h4>
              <p class="text-dark-text-secondary">Focus on Duolingo daily + Coffee Break Italian podcasts</p>
            </div>
            <div class="bg-italian-green/30 p-6 rounded-xl border border-italian-green/50">
              <h4 class="font-bold text-italian-green-light mb-2">Months 4-8</h4>
              <p class="text-dark-text-secondary">Add Pimsleur or Babbel for structured learning</p>
            </div>
            <div class="bg-sicilian-wine/30 p-6 rounded-xl border border-sicilian-wine/50">
              <h4 class="font-bold text-italian-red-light mb-2">Months 9-12</h4>
              <p class="text-dark-text-secondary">Start HelloTalk conversations with natives</p>
            </div>
            <div class="bg-sicilian-sunset/30 p-6 rounded-xl border border-sicilian-sunset/50">
              <h4 class="font-bold text-sicilian-sunset mb-2">Months 13-18</h4>
              <p class="text-dark-text-secondary">Intensive practice focusing on travel scenarios</p>
            </div>
          </div>
        </mat-card>

        <mat-card class="p-8 bg-sicilian-gradient text-white shadow-xl text-center">
          <h3 class="text-3xl font-bold mb-4">🚀 Ready to Start Your Italian Journey?</h3>
          <p class="text-lg leading-relaxed mb-6">
            With 1.5 years ahead of you, you have plenty of time to build a solid foundation. Even learning just the basics 
            will make your Sicily trip incredibly more enjoyable and help you connect with locals!
          </p>
          <div class="backdrop-blur-sm bg-white/20 p-4 rounded-xl inline-block">
            <p class="text-lg font-semibold">
              <strong>💡 Pro tip:</strong> Start with greetings and food vocabulary – you'll use these constantly in Sicily!
            </p>
          </div>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    a {
      text-decoration: none !important;
    }
    
    .mat-mdc-card {
      color: inherit !important;
    }

    .mat-mdc-card-title {
      color: inherit !important;
    }
    
    /* Add glassmorphism effects */
    .backdrop-blur-sm {
      backdrop-filter: blur(8px);
    }
  `]
})
export class LanguageComponent {
  learningResources: LearningResource[] = [
    {
      icon: '🦉',
      title: 'Duolingo',
      description: 'Perfect for daily practice with gamified lessons. Start here for building vocabulary and basic grammar.',
      recommendation: '15-20 minutes daily',
      pricing: [
        { label: 'Free', price: 'Free', type: 'free' },
        { label: 'Plus', price: '$6.99/month', type: 'paid' }
      ],
      url: 'https://www.duolingo.com/course/it/en/Learn-Italian'
    },
    {
      icon: '🎯',
      title: 'Babbel',
      description: 'Structured lessons focusing on practical conversation skills. Great for travel-specific vocabulary.',
      recommendation: '3-4 lessons per week',
      pricing: [
        { label: 'Monthly', price: '$13.95/month', type: 'paid' },
        { label: 'Annual', price: '$83.40/year', type: 'paid' }
      ],
      url: 'https://www.babbel.com/learn-italian'
    },
    {
      icon: '🎧',
      title: 'Pimsleur',
      description: 'Audio-based method focusing on pronunciation and speaking confidence. Excellent for developing natural rhythm.',
      recommendation: '30 minutes daily',
      pricing: [
        { label: 'Monthly', price: '$19.95/month', type: 'paid' },
        { label: 'All Access', price: '$20.95/month', type: 'paid' }
      ],
      url: 'https://www.pimsleur.com/learn-italian'
    },
    {
      icon: '☕',
      title: 'Coffee Break Italian',
      description: 'Short podcast episodes perfect for commuting. Builds listening skills gradually.',
      recommendation: 'Daily during commute',
      pricing: [
        { label: 'Free episodes', price: 'Free', type: 'free' },
        { label: 'Premium', price: '$4.99/month', type: 'paid' }
      ],
      url: 'https://open.spotify.com/show/2gcmLUHy5CvmnZgQ3E6Rsp'
    },
    {
      icon: '💬',
      title: 'HelloTalk',
      description: 'Chat with native Italian speakers. Practice real conversations and get corrections.',
      recommendation: '2-3 conversations per week',
      pricing: [
        { label: 'Free', price: 'Free', type: 'free' },
        { label: 'VIP', price: '$6.99/month', type: 'paid' }
      ],
      url: 'https://www.hellotalk.com'
    },
    {
      icon: '📺',
      title: 'Learn Italian with Lucrezia',
      description: 'YouTube channel with excellent pronunciation guides and cultural insights.',
      recommendation: '2-3 videos per week',
      pricing: [
        { label: 'Free', price: 'Free', type: 'free' }
      ],
      url: 'https://www.youtube.com/channel/UCgRmRjqN8WLJPyWFjNXTdCg'
    }
  ];
}