// import { Status } from '@pregnancy-journal-monorepo/contract';

enum Status {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export type BlogResponseType = {
  blog_id: string;
  title: string;
  author: string;
  summary: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  category: { title: string; status: "active" | "inactive"; category_id: string };
  blog_cover: string;
};

export const blogsMockData: BlogResponseType[] = [
  {
    blog_id: "1",
    title: "The Future of AI",
    author: "John Doe",
    summary: "Exploring how AI will shape our world in the coming decades.",
    content: "Artificial intelligence is evolving rapidly, with implications across industries...",
    created_at: new Date("2025-01-15"),
    updated_at: new Date("2025-02-10"),
    category: { title: "Technology", status: Status.ACTIVE, category_id: "tech-001" },
    blog_cover: "https://example.com/ai-cover.jpg",
  },
  {
    blog_id: "2",
    title: "Healthy Eating Habits",
    author: "Jane Smith",
    summary: "Tips and strategies for maintaining a balanced diet.",
    content: "Eating a variety of nutrient-rich foods is essential for good health...",
    created_at: new Date("2024-12-10"),
    updated_at: new Date("2025-01-05"),
    category: { title: "Health", status: Status.ACTIVE, category_id: "health-002" },
    blog_cover: "https://example.com/ai-cover.jpg",
  },
  {
    blog_id: "3",
    title: "Mastering TypeScript",
    author: "Alice Johnson",
    summary: "A guide to becoming proficient in TypeScript.",
    content: "TypeScript offers static typing and powerful tooling to JavaScript developers...",
    created_at: new Date("2025-01-20"),
    updated_at: new Date("2025-02-01"),
    category: { title: "Programming", status: Status.ACTIVE, category_id: "prog-003" },
    blog_cover: "https://example.com/ai-cover.jpg",
  },
  {
    blog_id: "4",
    title: "The Art of Mindfulness",
    author: "David Brown",
    summary: "How mindfulness can improve your mental health and well-being.",
    content: "Practicing mindfulness helps in reducing stress and enhancing focus...",
    created_at: new Date("2024-11-25"),
    updated_at: new Date("2025-01-10"),
    category: { title: "Lifestyle", status: Status.ACTIVE, category_id: "life-004" },
    blog_cover: "https://example.com/ai-cover.jpg",
  },
  {
    blog_id: "5",
    title: "Investment Strategies for Beginners",
    author: "Michael Lee",
    summary: "A beginner’s guide to smart investing.",
    content: "Understanding risk and diversification is key to successful investing...",
    created_at: new Date("2025-01-10"),
    updated_at: new Date("2025-02-05"),
    category: { title: "Finance", status: Status.ACTIVE, category_id: "fin-005" },
    blog_cover: "https://example.com/ai-cover.jpg",
  },
  {
    blog_id: "6",
    title: "The Power of Habit Formation",
    author: "Sarah White",
    summary: "How small habits can lead to big life changes.",
    content: "Building good habits starts with consistency and accountability...",
    created_at: new Date("2024-12-05"),
    updated_at: new Date("2025-01-25"),
    category: { title: "Self Improvement", status: Status.ACTIVE, category_id: "self-006" },
    blog_cover: "https://example.com/ai-cover.jpg",
  },
  {
    blog_id: "7",
    title: "Exploring Space: The Next Frontier",
    author: "Tom Anderson",
    summary: "A look at the latest advancements in space exploration.",
    content: "With the rise of private space companies, space travel is closer than ever...",
    created_at: new Date("2025-01-12"),
    updated_at: new Date("2025-02-09"),
    category: { title: "Science", status: Status.ACTIVE, category_id: "sci-007" },
    blog_cover: "https://example.com/ai-cover.jpg",
  },
  {
    blog_id: "8",
    title: "The Evolution of Web Development",
    author: "Emily Carter",
    summary: "A deep dive into how web technologies have changed over the years.",
    content: "From HTML tables to modern frameworks like React and Vue...",
    created_at: new Date("2025-01-05"),
    updated_at: new Date("2025-01-20"),
    category: { title: "Technology", status: Status.ACTIVE, category_id: "tech-008" },
    blog_cover: "https://example.com/ai-cover.jpg",
  },
  {
    blog_id: "9",
    title: "Photography Tips for Beginners",
    author: "Chris Wilson",
    summary: "How to take stunning photos with any camera.",
    content: "Understanding lighting and composition is crucial for great photography...",
    created_at: new Date("2024-12-15"),
    updated_at: new Date("2025-01-30"),
    category: { title: "Photography", status: Status.ACTIVE, category_id: "photo-009" },
    blog_cover: "https://example.com/ai-cover.jpg",
  },
  {
    blog_id: "10",
    title: "Understanding Cryptocurrency",
    author: "Robert Adams",
    summary: "An introduction to Bitcoin, Ethereum, and the world of digital currency.",
    content: "Cryptocurrency is a decentralized form of money built on blockchain technology...",
    created_at: new Date("2025-02-01"),
    updated_at: new Date("2025-02-15"),
    category: { title: "Finance", status: Status.ACTIVE, category_id: "fin-010" },
    blog_cover: "https://example.com/ai-cover.jpg",
  },
];
