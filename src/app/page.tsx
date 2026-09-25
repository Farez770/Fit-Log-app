import HomeBanner from "@/components/homeworkoutpage/HomeBanner";
import WorkoutPage from "./workouts/page";

export default function Home() {
  return (
    <div>
      <WorkoutPage />
      <HomeBanner />
    </div>
  );
}
