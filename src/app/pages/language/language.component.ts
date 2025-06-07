import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

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
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule],
  template: `
    <div class="min-h-screen bg-card-gradient py-8">
      <div class="container mx-auto px-6 max-w-6xl">
        <h1 class="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
          🇮🇹 Learn Italian for Sicily
        </h1>
        <p class="text-center text-xl text-gray-600 mb-12">Your complete guide to mastering basic Italian in 1.5 years</p>
        
        <h2 class="text-3xl font-bold mb-8 text-gray-800 border-l-4 border-blue-500 pl-4">🗣️ Essential Phrases to Master First</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <mat-card class="!p-6 !bg-gradient-to-br !from-blue-500 !to-blue-600 !text-white !shadow-xl">
            <h4 class="text-xl font-bold mb-4">Greetings</h4>
            <ul class="space-y-2">
              <li><strong>Ciao</strong> - Hello/Bye</li>
              <li><strong>Buongiorno</strong> - Good morning</li>
              <li><strong>Buonasera</strong> - Good evening</li>
            </ul>
          </mat-card>
          
          <mat-card class="!p-6 !bg-gradient-to-br !from-green-500 !to-green-600 !text-white !shadow-xl">
            <h4 class="text-xl font-bold mb-4">Basic Courtesy</h4>
            <ul class="space-y-2">
              <li><strong>Grazie</strong> - Thank you</li>
              <li><strong>Prego</strong> - You're welcome</li>
              <li><strong>Scusi</strong> - Excuse me</li>
            </ul>
          </mat-card>
          
          <mat-card class="!p-6 !bg-gradient-to-br !from-purple-500 !to-purple-600 !text-white !shadow-xl">
            <h4 class="text-xl font-bold mb-4">Travel Essentials</h4>
            <ul class="space-y-2">
              <li><strong>Dove si trova...?</strong> - Where is...?</li>
              <li><strong>Quanto costa?</strong> - How much?</li>
            </ul>
          </mat-card>
          
          <mat-card class="!p-6 !bg-gradient-to-br !from-orange-500 !to-red-500 !text-white !shadow-xl">
            <h4 class="text-xl font-bold mb-4">Food & Dining</h4>
            <ul class="space-y-2">
              <li><strong>Vorrei...</strong> - I would like...</li>
              <li><strong>Il conto, per favore</strong> - The check, please</li>
            </ul>
          </mat-card>
        </div>

        <h2 class="text-3xl font-bold mb-8 text-gray-800 border-l-4 border-green-500 pl-4">📚 Learning Resources & Pricing</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          @for (resource of learningResources; track resource.title) {
            <mat-card class="!p-6 !shadow-xl hover:!shadow-2xl !transition-all !duration-300 hover:!-translate-y-1 !border-2 hover:!border-blue-400">
              <div class="flex items-center mb-4">
                <span class="text-3xl mr-4">{{ resource.icon }}</span>
                <h3 class="text-2xl font-bold text-gray-800">{{ resource.title }}</h3>
              </div>
              
              <p class="text-gray-600 mb-4 leading-relaxed">{{ resource.description }}</p>
              
              <div class="bg-blue-50 p-3 rounded-lg mb-4">
                <strong class="text-blue-800">Recommendation:</strong>
                <span class="text-blue-700 ml-2">{{ resource.recommendation }}</span>
              </div>
              
              <div class="flex flex-wrap gap-2 mb-4">
                @for (price of resource.pricing; track price.label) {
                  <mat-chip-option 
                    [ngClass]="price.type === 'free' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'"
                    class="!font-semibold">
                    {{ price.label }}: {{ price.price }}
                  </mat-chip-option>
                }
              </div>
              
              <a [href]="resource.url" target="_blank" 
                 class="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 no-underline">
                Start Learning →
              </a>
            </mat-card>
          }
        </div>

        <mat-card class="!p-8 !bg-gradient-to-r !from-pink-100 !to-orange-100 mb-8 !shadow-xl">
          <h3 class="text-2xl font-bold mb-4 text-pink-800">🏝️ Sicily-Specific Tips</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Sicilians speak with a distinct accent and use some local dialect words, but standard Italian will serve you perfectly. 
            They're incredibly warm people who'll be patient with your learning efforts!
          </p>
          <p class="text-gray-700 leading-relaxed">
            <strong>Cultural note:</strong> Sicilians especially appreciate when visitors make an effort to speak Italian, 
            even just basic phrases. Your attempts will be met with smiles and encouragement.
          </p>
        </mat-card>

        <h2 class="text-3xl font-bold mb-8 text-gray-800 border-l-4 border-orange-500 pl-4">📅 Your 1.5-Year Learning Timeline</h2>
        
        <mat-card class="!p-8 !shadow-xl !border-l-4 !border-orange-500 mb-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-blue-50 p-6 rounded-xl">
              <h4 class="font-bold text-blue-800 mb-2">Months 1-3</h4>
              <p class="text-blue-700">Focus on Duolingo daily + Coffee Break Italian podcasts</p>
            </div>
            <div class="bg-green-50 p-6 rounded-xl">
              <h4 class="font-bold text-green-800 mb-2">Months 4-8</h4>
              <p class="text-green-700">Add Pimsleur or Babbel for structured learning</p>
            </div>
            <div class="bg-purple-50 p-6 rounded-xl">
              <h4 class="font-bold text-purple-800 mb-2">Months 9-12</h4>
              <p class="text-purple-700">Start HelloTalk conversations with natives</p>
            </div>
            <div class="bg-orange-50 p-6 rounded-xl">
              <h4 class="font-bold text-orange-800 mb-2">Months 13-18</h4>
              <p class="text-orange-700">Intensive practice focusing on travel scenarios</p>
            </div>
          </div>
        </mat-card>

        <mat-card class="!p-8 !bg-gradient-to-r !from-green-100 !to-teal-100 !shadow-xl text-center">
          <h3 class="text-3xl font-bold mb-4 text-green-800">🚀 Ready to Start Your Italian Journey?</h3>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            With 1.5 years ahead of you, you have plenty of time to build a solid foundation. Even learning just the basics 
            will make your Sicily trip incredibly more enjoyable and help you connect with locals!
          </p>
          <div class="bg-white p-4 rounded-xl inline-block">
            <p class="text-lg font-semibold text-gray-800">
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
    
    mat-chip-option {
      pointer-events: none;
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