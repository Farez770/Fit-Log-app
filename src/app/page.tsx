import HomeBanner from "@/components/homeworkoutpage/HomeBanner";
// import WorkoutPage from "./workouts/page";
import WorkoutLibraray from "@/components/homeworkoutpage/WorkoutLibraray";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <Suspense
        fallback={
          <p className="text-center text-2xl ">
            Workout Library Data is loading...
            <span className="loading loading-spinner text-success"></span>
          </p>
        }
      >
        <WorkoutLibraray />
      </Suspense>
    </div>
  );
}
