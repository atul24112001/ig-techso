type TutorialType = {
  _id: string;
  totalReviews: number;
  image: string;
  rating: number;
  title: string;
  numberOfStudentsWatched: number;
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
