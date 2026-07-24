export interface RecentLessonItem {
  id: number | string;
  title: string;
  author: string;
  category: string;
  readTime: string;
  imageSrc?: string;
}

export const mockRecentLessons: RecentLessonItem[] = [
  {
    id: 101,
    title: 'Foundations of Christian Ethics',
    author: 'Sarah Jenkins',
    category: 'Christian Life',
    readTime: '12m Read',
    imageSrc: ''
  },
  {
    id: 102,
    title: 'The Art of Active Listening',
    author: 'Mark Thompson',
    category: 'Leadership',
    readTime: '8m Read',
    imageSrc: ''
  },
  {
    id: 103,
    title: 'Digital Ministry Trends',
    author: 'YouthLead Hub',
    category: 'Discipleship',
    readTime: '15m Read',
    imageSrc: ''
  },
  {
    id: 104,
    title: 'Mental Health in Youth Groups',
    author: 'Dr. Amy Rose',
    category: 'Christian Life',
    readTime: '20m Read',
    imageSrc: ''
  }
]