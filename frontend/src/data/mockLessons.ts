export interface LessonItem {
  id: number;
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  primaryActionText: string;
  secondaryActionText: string;
}

export const mockLessons: LessonItem[] = [
  {
    id: 1,
    badge: 'NEW RELEASE',
    title: 'Strategic Leadership in Small Groups',
    description: 'Master the art of facilitating deep conversations and managing dynamics in youth circles. A comprehensive guide for leaders.',
    imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    primaryActionText: 'Read Lesson',
    secondaryActionText: 'Save'
  },
  {
    id: 2,
    badge: 'FEATURED',
    title: 'Modern UI/UX Design System Guidelines',
    description: 'Learn how to build scalable and accessible component libraries using Figma and Vue 3. Perfect for designers and developers.',
    imageSrc: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
    primaryActionText: 'Start Course',
    secondaryActionText: 'Bookmark'
  },
  {
    id: 3,
    badge: 'TRENDING',
    title: 'Data Science & AI Analytics Basics',
    description: 'Discover practical machine learning concepts and data visualization techniques using Python and modern Web APIs.',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    primaryActionText: 'Explore Now',
    secondaryActionText: 'Save for later'
  }
]