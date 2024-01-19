type TutorialType = {
  id: number;
  title: string;
  totalReviews: number;
  review: number;
  numberOfStudentsWatched: number;
  thumbnail: string;
};

type CourseType = {
  title: string;
  description: string;
  rating: number;
  totalReviews: number;
  numberOfStudentsWatched: number;
  durationInMinutes: number;
  videoCount: number;
  features: string[];
};

type QuestionType = {
  id: number;
  question: string;
  answer: string;
};
